import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RouteContainer from './App/router/NavigationContainer';
import axios from 'axios';
import { Provider } from 'react-redux';
import { store } from './App/redux/store';
const getFont = () => {
  return Font.loadAsync({
    'Viga-Regular': require('./assets/fonts/Viga-Regular.ttf'),
  });
};

axios.defaults.baseURL = `https://mainbersama.demosanbercode.com/api`;
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded';
export default function App() {
  const [font, SetFont] = useState(false);
  return font ? (
    <Provider store={store}>
      <RouteContainer />
    </Provider>
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => SetFont(true)} />
  );
}
