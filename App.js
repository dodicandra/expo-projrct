import React, {
  useState,
  useReducer,
  useEffect,
  useContext,
  useCallback,
} from 'react';
import { useAuthContext, AuthContext } from './App/context/hooks';
import RouteContainer from './App/router/NavigationContainer';
import AuthProvider from './App/context/Provider/AuthProvider';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import axios from 'axios';
import DataProvider from './App/context/Provider/DataProvider';
import { AsyncStorage } from 'react-native';

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
      <DataProvider>
        <RouteContainer />
      </DataProvider>
    </AuthProvider>
  ) : (
    <AppLoading startAsync={getFont} onFinish={() => setFont(true)} />
  );
}
