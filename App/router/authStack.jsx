import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/Login';
import RegisterScreen from '../Screen/Register';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();

function AuthStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegisterScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Main"
          component={BottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStack;
