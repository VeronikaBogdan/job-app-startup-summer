import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';

import authStore from './store/configureAuthStore';

import './styles/globals.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={authStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
