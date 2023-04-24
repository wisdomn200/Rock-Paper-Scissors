import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom';
import App from './App';

const rootElement = document.getElementById('app');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
