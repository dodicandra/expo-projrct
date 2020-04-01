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
    await AsyncStorage.setItem('token', JSON.stringify(data));
    axios.defaults.headers.common['Authorization'] = `Bearer ${data}`;
    dispatch({ type: 'LOG_IN', payload: data });
    dispatch({ type: 'STOP_LOADING' });
  }

  async function logout() {
    AsyncStorage.removeItem('token');
    dispatch({ type: 'LOG_OUT' });
  }

  return (
    <AuthContext.Provider value={{ state, dispatch, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
