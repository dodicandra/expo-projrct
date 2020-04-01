import React from 'react';
import { useAuthContext, AuthContext } from './useAuthContext';

const AuthProvider = ({ children }) => {
  const { authState, authDispatch } = useAuthContext();
  return (
    <AuthContext.Provider value={{ state: authState, dispatch: authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
