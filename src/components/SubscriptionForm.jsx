import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import performPayment from "../modules/stripePayment";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from "react-stripe-elements";
import { Button, Form, Modal, Message } from 'semantic-ui-react'

const SubscriptionForm = (props) => {
  const { currentUser, paymentMessage, paymentModalOpen } = useSelector(state => state);
  const dispatch = useDispatch()
  const payWithStripe = async (event) => {
    event.preventDefault();
    const stripeResponse = await props.stripe.createToken();
    stripeResponse.token && performPayment(stripeResponse.token.id, currentUser);
  }

  return (
    <Modal
      closeIcon
      onClose={() => dispatch({ type: "CLOSE_PAYMENT_FORM" })}
      onOpen={() => dispatch({ type: "OPEN_PAYMENT_FORM" })}
      open={paymentModalOpen}
      trigger={
        <Button inverted data-cy="become-subscriber">
          Subscribe!
          </Button>
      }
    >
      <Modal.Header>Pay your yarn!</Modal.Header>
      <Modal.Content>
        <Form
          data-cy="payment-form"
          onSubmit={payWithStripe}
        >
          <Form.Field data-cy="card-number">
            <label>Card Number</label>
            <CardNumberElement />
          </Form.Field>
          <Form.Field data-cy="card-expiry">
            <label>Expiry Date</label>
            <CardExpiryElement />
          </Form.Field>
          <Form.Field data-cy="card-cvc">
            <label>CVC Cod</label>
            <CardCVCElement />
          </Form.Field>
          <Form.Button>
            Confirm Payment
          </Form.Button>
        </Form>
      </Modal.Content>
      <Modal.Description>
        <Message data-cy="payment-message" negative>
          {paymentMessage}
        </Message>
      </Modal.Description>
    </Modal >
  )
}

export default injectStripe(SubscriptionForm)
