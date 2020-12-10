import React from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../../style/SignIn.css";

export default function SignIn() {
  return (
    <div className="signin-container">
      <h5>Sign In </h5>
      <Form>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Form.Text className="text-muted">
          Are you new around here?
          <Link to={"/register"}>Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
}
