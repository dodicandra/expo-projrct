import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import BottomNavigator from './BottomNavigator';
import { AuthContext } from '../hooks/useAuthContext';
import { useInit } from '../hooks';

export default function RouteContainer() {
  useInit();
  const { state, dispatch } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token !== null ? <BottomNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
