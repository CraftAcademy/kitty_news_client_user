import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
});

const signUp = async (event, dispatch) => {
  try {
    event.preventDefault();
    let response = await auth.signUp({
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    });
    dispatch({
      type: "SET_CURRENT_USER",
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: "ERROR_MESSAGE",
      payload: error.response.data.errors[0],
    });
  }
};

export { signUp };
