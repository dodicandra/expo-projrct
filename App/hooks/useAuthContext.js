import { createContext, useReducer } from 'react';

export const AuthContext = createContext();

const initialState = {
  token: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TOKEN':
      return {
        ...state,
        token: action.value,
      };
    case 'LOG_OUT':
      return {
        ...state,
        token: null,
      };
    case 'LOG_IN':
      return {
        ...state,
        token: action.value,
      };
    default:
      return state;
  }
};

export const useAuthContext = () => {
  const [authState, authDispatch] = useReducer(authReducer, initialState);
  return { authState, authDispatch };
};
