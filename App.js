import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/Login';
import RegisterScreen from './App/Screen/Register';
import IntroStack from './App/router/IntroStack';

export default function App() {
  return <IntroStack />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
