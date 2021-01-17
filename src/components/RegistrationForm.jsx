import React from 'react'
import { Form, Button, Icon, Modal, Message } from 'semantic-ui-react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../modules/Authentication'
import { useTranslation } from 'react-i18next'

const RegistrationForm = () => {
  const { t } = useTranslation()
  const { registerErrorMessage, modalOpen } = useSelector(
    (state) => state
  )
  const dispatch = useDispatch()

  return (
    <>
      <Modal
        closeIcon
        onClose={() => dispatch({ type: 'CLOSE_REGISTRATION_FORM' })}
        onOpen={() => dispatch({ type: 'OPEN_REGISTRATION_FORM' })}
        open={modalOpen}
        trigger={
          <Button data-cy="signup-button" inverted>
            {t('sign_up')}
          </Button>
        }
      >
        <Modal.Header>{t('create_account')}</Modal.Header>
        <Modal.Content>
          <Form
            data-cy="signup-form"
            onSubmit={(event) => signUp(event)}
          >
            <Form.Input
              icon="at"
              type="text"
              label={t('email')}
              name="email"
              data-cy="input-email"
              placeholder={t('email')}
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label={t('password')}
              name="password"
              data-cy="input-password"
              placeholder={t('password')}
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label={t('password_confirmation')}
              name="password_confirmation"
              data-cy="input-password-confirmation"
              placeholder={t('password_confirmation')}
              iconPosition="left"
            />
            <Button data-cy="submit-btn" icon labelPosition="left">
              <Icon name="user"></Icon>
              {t('submit_reg')}
            </Button>
            <Modal.Description>
              {registerErrorMessage && (
                <Message data-cy="register-error-message" negative>
                  {registerErrorMessage}
                </Message>
              )}
            </Modal.Description>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default RegistrationForm
