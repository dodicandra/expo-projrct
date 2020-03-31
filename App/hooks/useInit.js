import React, { useContext, useEffect, useCallback } from 'react';
import { AuthContext } from './useAuthContext';
import { AsyncStorage } from 'react-native';

export const useInit = () => {
  const authContext = useContext(AuthContext);

  const getToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');
    authContext.dispatch({ type: 'SET_TOKEN', value: token });
  });

  useEffect(() => {
    getToken();
  }, []);
};
