import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import AuthStack from './App/router/authStack';

const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, SetFont] = useState(false);
  return font ? (
    <AuthStack />
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => SetFont(true)} />
  );
}
