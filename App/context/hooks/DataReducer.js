import { createContext } from 'react';

export const DataContext = createContext();

export const dataInit = {
  data: [],
  isLoading: false,
};

export const dateRducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        ...state,
        data: action.payload,
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
    default:
      return state;
  }
};
