import React, { useState, useReducer, useEffect, useContext } from 'react';
import { useAuthContext, AuthContext } from './App/context/hooks';
import RouteContainer from './App/router/NavigationContainer';
import AuthProvider from './App/context/Provider/AuthProvider';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import axios from 'axios';

axios.defaults.baseURL = 'https://mainbersama.demosanbercode.com';

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
