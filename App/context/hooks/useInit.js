import React, { useContext, useEffect, useCallback } from 'react';
import { AuthContext } from './AuthReducer';
import { AsyncStorage } from 'react-native';

export const useInit = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    const getToken = async () => {
      try {
        const token = await AsyncStorage.getItem('token');
        authContext.dispatch({ type: 'SET_TOKEN', value: token });
      } catch (error) {
        console.log(error);
      }
    };

    getToken();
  }, []);
};
