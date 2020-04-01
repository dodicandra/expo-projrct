import React, { useReducer } from 'react';
import { dateRducer, dataInit, DataContext } from '../hooks';
import * as api from '../../Api';

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dateRducer, dataInit);

  // const GETdata = async () => {
  //   try {
  //     dispatch({ type: 'SET_LOADING' });
  //     let ress = await api.getVenue();
  //     dispatch({ type: 'SET_DATA', payload: ress.venues });
  //     dispatch({ type: 'STOP_LOADING' });
  //   } catch (error) {}
  // };

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
