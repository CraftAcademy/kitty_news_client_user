import React from "react";
import { Form, Button, Icon, Modal, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../modules/Authentication";

const RegistrationForm = () => {
  const { registerErrorMessage, modalOpen } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        closeIcon
        onClose={() => dispatch({ type: "CLOSE_MODAL" })}
        onOpen={() => dispatch({ type: "OPEN_MODAL" })}
        open={modalOpen}
        trigger={
          <Button data-cy="signup-button" inverted>
            Sign up!
          </Button>
        }
      >
        <Modal.Header>Create an account!</Modal.Header>
        <Modal.Content>
          <Form
            data-cy="signup-form"
            onSubmit={(event) => signUp(event, dispatch)}
          >
            <Form.Input
              icon="at"
              type="text"
              label="Email"
              name="email"
              data-cy="input-email"
              placeholder="Email"
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label="Password"
              name="password"
              data-cy="input-password"
              placeholder="Password"
              iconPosition="left"
            />
            <Form.Input
              icon="key"
              type="password"
              label="Password Confirmation"
              name="password_confirmation"
              data-cy="input-password-confirmation"
              placeholder="Password Confirmation"
              iconPosition="left"
            />
            <Button data-cy="submit-btn" icon labelPosition="left">
              <Icon name="user"></Icon>
              Submit
            </Button>
          </Form>
        </Modal.Content>
        <Modal.Description>
          {registerErrorMessage && (
            <Message data-cy="register-error-message" negative>
              {registerErrorMessage}
            </Message>
          )}
        </Modal.Description>
      </Modal>
    </>
  );
};

export default RegistrationForm;
