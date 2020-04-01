import React, { useState, useReducer, useEffect, useContext } from 'react';
import { useAuthContext, AuthContext } from './App/hooks';
import RouteContainer from './App/router/NavigationContainer';
import AuthProvider from './App/hooks/AuthProvider';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, setFont] = useState(false);

  return font ? (
    <AuthProvider>
      <RouteContainer />
    </AuthProvider>
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => setFont(true)} />
  );
}
