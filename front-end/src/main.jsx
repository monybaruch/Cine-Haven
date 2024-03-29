import './assets/styles/bootstrap.custom.css';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import App from './App.jsx';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer />
    <App />
  </React.StrictMode>
);
