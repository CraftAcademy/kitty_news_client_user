import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import "semantic-ui-css/semantic.min.css"

axios.defaults.baseURL = "http://localhost:3001/api/"

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
