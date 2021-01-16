import JtockAuth from "j-tockauth"
import store from "../state/store/configureStore"

const auth = new JtockAuth({
  host: process.env.REACT_APP_API_URL,
})

const signUp = async (event, dispatch) => {
  try {
    event.preventDefault()
    let response = await auth.signUp({
      email: event.target.email.value,
      password: event.target.password.value,
      password_confirmation: event.target.password_confirmation.value,
    })
    dispatch({
      type: "SET_CURRENT_USER",
      payload: response.data,
    })
    dispatch({ type: "CLOSE_REGISTRATION_FORM" })
  } catch (error) {
    dispatch({
      type: "REGISTER_ERROR_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    })
    dispatch({ type: "OPEN_REGISTRATION_FORM" })
  }
}

const logIn = async (event) => {
  try {
    const response = await auth.signIn({
      email: event.target.email.value,
      password: event.target.email.value,
    })

    store.dispatch({
      type: "SET_CURRENT_USER",
      payload: response.data,
    })
    store.dispatch({ type: "CLOSE_LOGIN_FORM" })
  } catch (error) {
    store.dispatch({
      type: "LOGIN_ERROR_MESSAGE",
      payload: error.response.data.errors.full_messages[0],
    })
    store.dispatch({ type: "OPEN_LOGIN_FORM" })
  }
}

export { signUp, logIn }
