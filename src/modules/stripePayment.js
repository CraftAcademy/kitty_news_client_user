const performPayment = async (stripeToken, credentials) => {
  let headers = JSON.parse(localStorage.getItem("credentials"));
  const response = await axios.post(
    "/subscriptions",
    { stripeToken: stripeToken },
    { headers: headers }
  );
  response.data.paid
    ? this.setState({ message: response.data.message })
    : this.setState({ message: "Your payment information is RIGGED!!" });
};

export default performPayment;
