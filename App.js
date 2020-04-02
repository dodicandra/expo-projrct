import React, { useState } from 'react';
import RouteContainer from './App/router/NavigationContainer';
import AuthProvider from './App/context/Provider/AuthProvider';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import axios from 'axios';
import DataProvider from './App/context/Provider/DataProvider';

axios.defaults.baseURL = 'https://mainbersama.demosanbercode.com';

const getFont = async () => {
  return await Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

export default function App() {
  const [font, setFont] = useState(false);

  return font ? (
    <AuthProvider>
      <DataProvider>
        <RouteContainer />
      </DataProvider>
    </AuthProvider>
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => setFont(true)} />
  );
}
