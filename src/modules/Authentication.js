import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
});

const signUp = async (event, dispatch, setOpen) => {
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
    setOpen(false);
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    });
    setOpen(true);
  }
};

export { signUp };
