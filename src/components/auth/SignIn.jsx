import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../../style/SignIn.css";
import { auth } from "../../firebase";

export default function SignIn() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log("email", email, "password", password);

  const handleSubmitSignIn = (e) => {
    e.preventDefault();
  };

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-container">
      <h5>Sign In </h5>
      <Form onSubmit={handleSubmitSignIn}>
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
          SignIn
        </Button>
        <Button onClick={handleRegister} variant="success" type="submit">
          Register
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
