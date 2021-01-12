import JtockAuth from "j-tockauth";

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
});

const signUp = async (event, dispatch) => {
  try {
    event.preventDefault();
    let response = await auth.signUp(
      event.target.email.value,
      event.target.password.value
    );
    dispatch({
      type: "SET_CURRENT_USER",
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: "SET_ERROR_MESSAGE",
      payload: error.response.data.errors[0],
    });
  }
};

export { signUp };
