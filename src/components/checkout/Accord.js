import React from "react";
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
      <h4 className="Accord-heading">Checkout your items, {user.email}</h4>
      <div className="payment-container">
        <Accordion defaultActiveKey="0">
          {cart.map((item, index) => {
            return (
              <div key={index}>
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button}
                      variant="link"
                      eventKey={`${index}`}
                    >
                      {item.title.substring(0, 7) + "..."}
                    </Accordion.Toggle>
                    <button
                      className="accordion-remove-button"
                      onClick={() => handleRemove(item.id)}
                    >
                      X
                    </button>
                  </Card.Header>
                  <Accordion.Collapse eventKey={`${index}`}>
                    <Card.Body>
                      {item.title}
                      {item.price}
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </div>
            );
          })}
        </Accordion>
      </div>
    </div>
  );
}
