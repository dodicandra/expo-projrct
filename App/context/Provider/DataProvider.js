import React, { useReducer, useMemo } from 'react';
import { dateRducer, dataInit, DataContext } from '../hooks';

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dateRducer, dataInit);

  const setData = async (data) => {
    try {
      dispatch({ type: 'SET_DATA', payload: data });
      dispatch({ type: 'STOP_LOADING' });
    } catch (error) {
      console.log('=>', error);
      dispatch({ type: 'STOP_LOADING' });
    }
  };

  const value = useMemo(() => {
    return { state, setData, dispatch };
  }, [state]);

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

export default DataProvider;
