import React, { useReducer } from 'react';
import {
  useAuthContext,
  AuthContext,
  authReducer,
  initialState,
} from '../hooks';

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
