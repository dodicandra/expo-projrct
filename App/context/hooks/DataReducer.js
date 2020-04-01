import { createContext } from 'react';

export const DataContext = createContext({
  getData: () => {},
});

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
        isLoading: false,
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
