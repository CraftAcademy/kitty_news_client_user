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
  <StripeProvider apiKey="pk_test_51HuxwPB4iQLxMzwRoYvwIg9YWiZPJbCCNQvYgR53ye90XKjtqHZGIwJBbnOwoM0HRPf1YrQ0J44YJlUviKfXUTIU00HdNTkvl4">
    <Provider store={store}>
      <Suspense fallback={<div>Loading.... Meow!</div>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </Provider>
  </StripeProvider>,
  document.getElementById("root")
);

reportWebVitals();
