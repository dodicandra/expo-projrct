import React, { useState, useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import BottomNavigator from './BottomNavigator';
import HomeStack from './HomeStack';
import { AuthContext } from '../context/authContext';

export default function RouteContainer() {
  const { token } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {token ? <BottomNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
