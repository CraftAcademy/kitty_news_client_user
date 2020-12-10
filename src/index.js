import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

axios.defaults.baseURL = "http://localhost:3000/api/"

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
