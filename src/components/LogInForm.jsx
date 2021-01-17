import React from "react"
import { Form, Button, Icon, Modal, Message } from "semantic-ui-react"
import { useDispatch, useSelector } from "react-redux"
import { logIn } from "../modules/Authentication"
import { useTranslation } from 'react-i18next'

const LogInForm = () => {
  const { t } = useTranslation()
  const { logInErrorMessage, logInModalOpen } = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <>
      <Modal
        closeIcon
        onClose={() => dispatch({ type: "CLOSE_LOGIN_FORM" })}
        onOpen={() => dispatch({ type: "OPEN_LOGIN_FORM" })}
        open={logInModalOpen}
        trigger={
          <Button data-cy="log-in-button" inverted>
            {t('log_in')}
          </Button>
        }
      >
        <Modal.Header>{t('login_here')}</Modal.Header>
        <Modal.Content>
          <Form
            data-cy="log-in-form"
            onSubmit={(event) => logIn(event)}
          >
            <Form.Input
              icon="at"
              type="text"
              name="email"
              label={t('email')}
              data-cy="log-in-email"
              placeholder={t('email')}
              iconPosition="left"
            />
              
            <Form.Input
              icon="key"
              type="password"
              name="password"
              label={t('password')}
              data-cy="log-in-password"
              placeholder={t('password')}
              iconPosition="left"
            />
            <Button data-cy="log-in-submit-btn" icon labelPosition="left">
              <Icon name="user"></Icon>
              {t('submit')}
            </Button>
            <Modal.Description>
              {logInErrorMessage && (
                <Message data-cy="log-in-error-message" negative>
                  {logInErrorMessage}
                </Message>
              )}
            </Modal.Description>
          </Form>
        </Modal.Content>
      </Modal>
    </>
  )
}

export default LogInForm
