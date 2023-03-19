import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import 'assets/stylesheet/_base.scss';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename="/rick_and_morty_app">
    <App />
  </BrowserRouter>
);
