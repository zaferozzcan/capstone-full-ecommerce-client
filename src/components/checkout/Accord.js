import React from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button } from "react-bootstrap";
import "../../style/Payment.css";
import { useStateValue } from "../../Providers/StateProvider";

export default function Accord() {
  const [{ cart, user }, dispatch] = useStateValue();
  console.log("cart in accord", cart);
  function handleRemove(id) {
    dispatch({ type: "REMOVE_ITEM", id: id });
  }
  return (
    <div className="accord">
      <br></br>
      <Link>
        <h4 className="Accord-heading">Checkout Your Items, {user.email}</h4>
      </Link>
      <div className="payment-container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Shipping Address
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>58 Kent Street, Quincy, MA, 02169</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Payment Method
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>Visa ending 2222</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Review items
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {cart.length === 0
                  ? "There is no item in the cart"
                  : cart.map((item) => {
                      return (
                        <>
                          {item.title} --{item.price}{" "}
                          <button className="accordion-remove-button">X</button>
                        </>
                      );
                    })}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
