import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import performPayment from '../modules/stripePayment'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCVCElement,
  injectStripe,
} from 'react-stripe-elements'
import { Button, Form, Modal, Message, Segment } from 'semantic-ui-react'
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
        <Button inverted data-cy='become-subscriber'>
          {t('subscribe_sub')}
        </Button>
      }
    >
      <Modal.Header>{t('pay_header')}</Modal.Header>
      <Modal.Description>
        <Segment>
          <p>{t('750_sek_year')}</p>
        </Segment>
      </Modal.Description>
      <Modal.Content>
        <Form data-cy='payment-form' onSubmit={payWithStripe}>
          <Form.Field data-cy='card-number'>
            <label>{t('card_number')}</label>
            <CardNumberElement />
          </Form.Field>
          <Form.Field data-cy='card-expiry'>
            <label>{t('expiry_date')}</label>
            <CardExpiryElement />
          </Form.Field>
          <Form.Field data-cy='card-cvc'>
            <label>{t('cvc_code')}</label>
            <CardCVCElement />
          </Form.Field>
          <Form.Button>{t('confirm_payment')}</Form.Button>
          <Modal.Description>
            {paymentSuccessMessage && (
              <Message
                color='green'
                size='big'
                data-cy='payment-success-message'
              >
                {paymentSuccessMessage}
              </Message>
            )}
            {paymentErrorMessage && (
              <Message color='red' size='big' data-cy='payment-error-message'>
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
