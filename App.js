import React, { useState, useReducer, useEffect, useContext } from 'react';
import { useAuthContext, AuthContext } from './App/hooks';
import RouteContainer from './App/router/NavigationContainer';

export default function App() {
  const { authState, authDispatch } = useAuthContext();

  return (
    <AuthContext.Provider value={{ state: authState, dispatch: authDispatch }}>
      <RouteContainer />
    </AuthContext.Provider>
  );
}
