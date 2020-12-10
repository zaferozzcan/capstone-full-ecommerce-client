import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import "../../style/SignIn.css";
import { auth } from "../../firebase";

export default function SignIn() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   console.log("email", email, "password", password);

  const handleRegister = () => {
    auth
      .createUserWithEmailAndPassword(name, lastName, email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="signin-container">
      <h5>Sign Up </h5>
      <Form>
        <Form.Group controlId="Name">
          <Form.Label>Customer Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            placeholder="Customer Name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="Lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            name="Lastname"
            placeholder="Lastname"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Group>
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
        <Button onClick={handleRegister} variant="success" type="submit">
          Register
        </Button>
        <Link to={"/"}>
          <Button variant="danger" type="submit">
            Cancel
          </Button>
        </Link>
      </Form>
    </div>
  );
}
