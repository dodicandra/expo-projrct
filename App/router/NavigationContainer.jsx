import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './authStack';
import BottomNavigator from './BottomNavigator';
<<<<<<< HEAD
import { useInit, AuthContext } from '../context/hooks';

export default function RouteContainer() {
  useInit();
  const { state, dispatch } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {state.token !== null ? <BottomNavigator /> : <AuthStack />}
    </NavigationContainer>
=======
import HomeStack from './HomeStack';
import AuthProvider, { AuthContext } from '../context/authContext';

export default function RouteContainer() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </AuthProvider>
>>>>>>> add login
  );
}
