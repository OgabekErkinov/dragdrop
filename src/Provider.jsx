import React, { useState } from 'react';
import { AppContext } from './context';
import { datas } from './db';

const Provider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  return (
    <AppContext.Provider value={{ datas, inputValue, setInputValue }}>
      {children}
    </AppContext.Provider>
  );
};

export default Provider;