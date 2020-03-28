import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [token, setToken] = useState(false);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {props.children}
    </AuthContext.Provider>
  );
}
