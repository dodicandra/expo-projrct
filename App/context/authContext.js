import React, { createContext, useState, useReducer } from 'react';
import { AsyncStorage } from 'react-native';

export const AuthContext = createContext();

export const initialState = {
  token: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.token,
      };
    case 'LOG_OUT':
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
};

export default function AuthContextProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  console.log(state);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {props.choldren}
    </AuthContext.Provider>
  );
}
