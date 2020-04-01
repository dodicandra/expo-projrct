import { createContext, useReducer } from 'react';

export const AuthContext = createContext({
  token: null,
  login: (userData) => {},
  logout: () => {},
});

export const initialState = {
  token: null,
  isLoading: false,
  errors: null,
};

export const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.payload,
      };
    case 'LOG_OUT':
      return {
        ...state,
        token: null,
      };
    case 'LOG_IN':
      return {
        ...state,
        token: action.payload,
      };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: true,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        isLoading: false,
      };
    case 'SET_ERROR':
      return {
        ...state,
        errors: action.payload,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        errors: null,
      };
    default:
      return state;
  }
};
