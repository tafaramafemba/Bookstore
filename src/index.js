import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from "react-redux";
import configureStore from './redux/configureStore';
import '../src/index.css';

const { store } = configureStore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Provider store={store}>
      <App />
    </Provider>,
  </React.StrictMode>
);