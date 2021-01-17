import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import performPayment from '../modules/stripePayment'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements'
import {
  Button,
  Form,
  Modal,
  Message,
  Segment,
} from 'semantic-ui-react'
import { useTranslation } from 'react-i18next'

const SubscriptionForm = (props) => {
  const { t } = useTranslation()
  const {
    paymentErrorMessage,
    paymentSuccessMessage,
    paymentModalOpen,
  } = useSelector((state) => state)
  const dispatch = useDispatch()

  const payWithStripe = async (event) => {
    event.preventDefault()
    const stripeResponse = await props.stripe.createToken()
    stripeResponse.token && performPayment(stripeResponse.token.id)
  }

  return (
    <Modal
      closeIcon
      onClose={() => dispatch({ type: 'CLOSE_PAYMENT_FORM' })}
      onOpen={() => dispatch({ type: 'OPEN_PAYMENT_FORM' })}
      open={paymentModalOpen}
      trigger={
        <Button inverted data-cy="become-subscriber">
          Subscribe!
          {t('subscribe_sub')}
        </Button>
      }
    >
      <Modal.Header>
      {t('pay_header')}
      </Modal.Header>
      <Modal.Description>
        <Segment>
          <p>
            For only 750 SEK/year you'll access all of our Kitty News!
          </p>
        </Segment>
      </Modal.Description>
      <Modal.Content>
        <Form data-cy="payment-form" onSubmit={payWithStripe}>
          <Form.Field data-cy="card-number">
            <label>Card Number</label>
            <CardNumberElement />
          </Form.Field>
          <Form.Field data-cy="card-expiry">
            <label>Expiry Date</label>
            <CardExpiryElement />
          </Form.Field>
          <Form.Field data-cy="card-cvc">
            <label>CVC Code</label>
            <CardCVCElement />
          </Form.Field>
          <Form.Button>Confirm Payment</Form.Button>
          <Modal.Description>
            {paymentSuccessMessage && (
              <Message
                color="green"
                size="big"
                data-cy="payment-success-message"
              >
                {paymentSuccessMessage}
              </Message>
            )}
            {paymentErrorMessage && (
              <Message
                color="red"
                size="big"
                data-cy="payment-error-message"
              >
                {paymentErrorMessage}
              </Message>
            )}
          </Modal.Description>
        </Form>
      </Modal.Content>
    </Modal>
  )
}

export default injectStripe(SubscriptionForm)
