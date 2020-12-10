import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../../style/SignIn.css";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log("email", email, "password", password);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="signin-container">
      <h5>Sign In </h5>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="Email">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="Password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
        <Link to={"/"}>
          <Button variant="danger" type="submit">
            Cancel
          </Button>
        </Link>
        <Form.Text className="text-muted">
          Are you new around here?
          <Link to={"/register"}>Register</Link>
        </Form.Text>
      </Form>
    </div>
  );
}
