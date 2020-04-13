import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import BottomNavigator from './BottomNavigator';

import { useSelector, useDispatch } from 'react-redux';
import { AsyncStorage } from 'react-native';

export default function RouteContainer() {
  const authReducer = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const getToken = async () => {
      const token = await AsyncStorage.getItem('token');
      dispatch({ type: 'SET_USER', payload: token });
    };

    getToken();
  }, []);

  return (
    <NavigationContainer>
      {authReducer.userToken ? <BottomNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
