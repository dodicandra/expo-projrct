import React, { useState, useReducer, useEffect } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import {
  authReducer,
  initialState,
  AuthContext,
} from './App/context/authContext';
import AuthStack from './App/router/authStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './App/router/BottomNavigator';
import { AsyncStorage } from 'react-native';
const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, SetFont] = useState(false);
  const [state, dispatch] = useReducer(AuthContext);

  useEffect(() => {
    let userToken;
    let reject = false;
    const getToken = async () => {
      try {
        userToken = await AsyncStorage.getItem('token');
        if (reject) return;
        dispatch({ type: 'SET_TOKEN', token: userToken });
      } catch (error) {
        console.log(error);
      }
      // dispatch({
      //   type: 'SET_TOKEN',
      //   token: userToken,
      // });
    };
    getToken();
    return () => (reject = true);
  });

  return font ? (
    <NavigationContainer>
      {state.token !== null ? <BottomNavigator /> : <AuthStack />}
    </NavigationContainer>
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => SetFont(true)} />
  );
}
