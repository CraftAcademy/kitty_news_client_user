import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import "semantic-ui-css/semantic.min.css"

axios.defaults.baseURL = process.env.REACT_APP_API_URL

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

reportWebVitals();
