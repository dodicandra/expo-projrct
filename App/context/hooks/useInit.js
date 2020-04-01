import React, { useContext, useEffect, useCallback } from 'react';
import { AuthContext } from './AuthReducer';
import { AsyncStorage } from 'react-native';
import axios from 'axios';

export const useInit = () => {
  const authContext = useContext(AuthContext);

  const getToken = useCallback(async () => {
    try {
      const token = await AsyncStorage.getItem('token');
      authContext.dispatch({ type: 'SET_TOKEN', payload: token });
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } catch (error) {
      console.log(error);
    }
  });

  useEffect(() => {
    getToken();
  }, []);
};
