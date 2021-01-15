import axios from "axios";
import store from "../state/store/configureStore";

const performPayment = async (stripeToken, credentials) => {
  try {
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
    store.dispatch({
      type: "SET_PAYMENT_ERROR_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    });
  }
};

export default performPayment;
