import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RouteContainer from './App/router/NavigationContainer';
import AuthContextProvider from './App/context/authContext';
const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, SetFont] = useState(false);
  return font ? (
    <AuthContextProvider>
      <RouteContainer />
    </AuthContextProvider>
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => SetFont(true)} />
  );
}
