import React, { useReducer } from 'react';
import {
  useAuthContext,
  AuthContext,
  authReducer,
  initialState,
} from '../hooks';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  async function login(data) {
    dispatch({ type: 'SET_LOADING' });
    await setOtorisasiHeader(data);
    dispatch({ type: 'LOG_IN', payload: data });
    dispatch({ type: 'STOP_LOADING' });
  }

  async function logout() {
    dispatch({ type: 'SET_LOADING' });
    await AsyncStorage.removeItem('token');
    delete axios.defaults.headers.common['Authorization'];
    dispatch({ type: 'LOG_OUT' });
    dispatch({ type: 'STOP_LOADING' });
  }

  const setOtorisasiHeader = async (token) => {
    const FBIdToken = `Bearer ${token}`;
    await AsyncStorage.setItem('token', token);
    axios.defaults.headers.common['Authorization'] = FBIdToken;
  };

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
