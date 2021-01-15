import axios from "axios";
import store from "../state/store/configureStore";

const performPayment = async (stripeToken, credentials) => {
  try {
    const response = await axios.post(
      "/subscriptions",
      { stripeToken: stripeToken },
      { headers: credentials }
    );
    response.data.paid
      ? store.dispatch({
          type: "SET_PAYMENT_MESSAGE",
          payload: response.data.message,
        })
      : store.dispatch({
          type: "SET_PAYMENT_MESSAGE",
          payload: "Meow, You're out of yarn! Try again!",
        });
  } catch (error) {
    store.dispatch({
      type: "SET_PAYMENT_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    });
  }
};

export default performPayment;
