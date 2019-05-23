/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../../../firebase';
import { Form, Button } from 'react-bootstrap';

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push('/dashboard');
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  return (
    <div>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" className="btn btn-block signinbtn" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);
