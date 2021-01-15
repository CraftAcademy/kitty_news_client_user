import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import axios from "axios";
import "semantic-ui-css/semantic.min.css";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./state/store/configureStore";
import { Provider } from "react-redux";
import { StripeProvider } from "react-stripe-elements";
import "./i18n";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <StripeProvider apiKey="pk_test_51HRXbsLRsHijJIX0zutPae262FCx438btFduSWoETwJ2HCC2vqSjG6sd4PA7RoddpyAvRwnLXUe1ujrUmsB4Gkn500iicqAMK9">
      <Suspense fallback={<div>Loading.... Meow!</div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </StripeProvider>
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
