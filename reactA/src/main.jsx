import React, { createContext } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

const info = {
  name: 'Megumi',
  age: 24,
};

const infoContext = createContext(info);

createRoot(document.getElementById('root')).render(
  <infoContext.Provider value={info}>
    <StrictMode>
      <App />
    </StrictMode>
  </infoContext.Provider>
);

export default infoContext;