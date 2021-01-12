import React, { useState} from "react";
import { Form, Button, Icon, Modal, Message } from "semantic-ui-react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "../modules/Authentication";

const RegistrationForm = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <Modal
        closeIcon
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <Button data-cy="signup-button" basic color="teal">
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
          {currentUser && (
            <Message data-cy="register-error-message" negative>
              Something went wrong!
            </Message>
          )}
        </Modal.Description>
      </Modal>
    </>
  );
};

export default RegistrationForm;
