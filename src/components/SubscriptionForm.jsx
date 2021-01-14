import React from 'react'
import { useSelector } from "react-redux";
import performPayment from "../modules/stripePayment";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import { Button, Form } from 'semantic-ui-react'

const SubscriptionForm = () => {
  const { currentUser } = useSelector((state) => state);
  const payWithStripe = async (event) => {
    event.preventDefault();
    const stripeResponse = await this.props.stripe.createToken();
    stripeResponse.token && performPayment(stripeResponse.token.id, currentUser);
  }

  return (
    <>
      <Button inverted data-cy="become-subscriber">Subscribe!</Button>
      <Form data-cy="payment-form" onSubmit={payWithStripe}>
        <Form.Input data-cy="card-number" label="Card Number">
          <CardNumberElement />
        </Form.Input>
        <Form.Input data-cy="card-expiry" label="Expiry Date">
          <CardExpiryElement />
        </Form.Input>
        <Form.Input data-cy="card-cvc" label="CVC Code">
          <CardCVCElement />
        </Form.Input>
        <Button>Confirm Payment</Button>
      </Form>
    </>
  )
}

export default injectStripe(SubscriptionForm)
