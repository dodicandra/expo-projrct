import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './App/Screen/Login';
import RegisterScreen from './App/Screen/Register';
import IntroStack from './App/router/IntroStack';

const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, SetFont] = useState(false);
  return font ? (
    <IntroStack />
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => SetFont(true)} />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
