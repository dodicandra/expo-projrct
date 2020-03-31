import React, { useReducer } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import BottomNavigator from './BottomNavigator';
import { AuthContext, authReducer } from '../context/authContext';

export default function RouteContainer() {
  const [state] = useReducer(authReducer);
  return (
    <NavigationContainer>
      {state.token !== null ? <BottomNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}
