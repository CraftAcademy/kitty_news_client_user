import axios from "axios";
import store from "../state/store/configureStore";

const performPayment = async (stripeToken, credentials) => {
  try {
    debugger
    const response = await axios.post(
      "/subscriptions",
      { stripeToken: stripeToken },
      { headers: credentials }
    );
    store.dispatch({
      type: "SET_PAYMENT_SUCCESS_MESSAGE",
      payload: response.data.message,
    });
  } catch (error) {
    debugger
    store.dispatch({
      type: "SET_PAYMENT_ERROR_MESSAGE",
      payload: error.response.data.message,
    });
  }
};

export default performPayment;
