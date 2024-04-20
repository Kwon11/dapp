import React, { createContext, useContext, useState} from 'react';

const RootContext = createContext();

export const RootContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const value = {
    user,
    setUser,
  };

  return (
    <RootContext.Provider value={value}>{children}</RootContext.Provider>
  )
};

export const useRootContext = () => useContext(RootContext);