import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Screen/Login';
import RegisterScreen from '../Screen/Register';

const Stack = createStackNavigator();

function AuthStack() {
  return (
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
    </Stack.Navigator>
  );
}

export default AuthStack;
