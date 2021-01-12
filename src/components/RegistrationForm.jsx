import React from "react";
import { Segment, Form, Button, Icon } from "semantic-ui-react";
import { useDispatch } from "react-redux";
import { signUp } from "../modules/Authentication";


const RegistrationForm = () => {
  const dispatch = useDispatch();

  return (
    <Segment placeholder>
      <Form
        className="loginForm"
        data-cy="login-form"
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
          label="Password"
          name="password"
          data-cy='input-password-confirmation'
          placeholder="Password Confirmation"
          iconPosition="left"
        />

        <Button data-cy="submit-btn" icon labelPosition="left">
          <Icon name="user"></Icon>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default RegistrationForm;
