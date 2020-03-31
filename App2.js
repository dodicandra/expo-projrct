import React, { useState, useReducer, useEffect, useContext } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AuthContextProvider, { AuthContext } from './App/context/authContext';
import AuthStack from './App/router/authStack';
import { NavigationContainer } from '@react-navigation/native';
import BottomNavigator from './App/router/BottomNavigator';
import { AsyncStorage, View, Text } from 'react-native';
const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, SetFont] = useState(false);
  // const { state, dispatch } = useContext(AuthContext); // dia bilang disini yang error mas / om :D
  // useEffect(() => {
  //   let userToken;
  //   let reject = false;
  //   const getToken = async () => {
  //     try {
  //       userToken = await AsyncStorage.getItem('token');
  //       if (reject) return;
  //     } catch (error) {
  //       console.log(error);
  //     }
  //     dispatch({
  //       type: 'SET_TOKEN',
  //       token: userToken,
  //     });
  //   };
  //   getToken();
  //   return () => (reject = true);
  // });

  // gini saja coba dulu, ohi see,
  return (
    <View>
      <Text>tes</Text>
    </View>
  );
} // kalo gini jalan sih om
// ok wait

// font ? (
//   <AuthContextProvider>
//     {state !== null ? <BottomNavigator /> : <AuthStack />}
//   </AuthContextProvider>
// ) : (
//   <AppLoading startAsync={getFont} onFinish={() => SetFont(true)} /> // bisa liat terminal om?
// );
