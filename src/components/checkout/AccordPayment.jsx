import React from "react";
import { Card, Button } from "react-bootstrap";
import { useStateValue } from "../../Providers/StateProvider";

export default function AccordPayment() {
  const [{ cart, user }, dispatch] = useStateValue();

  const total = cart.reduce((acc, item) => item.price + acc, 0);
  return (
    <div className="accord-payment-container">
      <Card className="text-center">
        <Card.Header>Order Summary</Card.Header>
        <Card.Body>
          <Card.Text>Subtotal:{total}</Card.Text>
          <Card.Text>Tax</Card.Text>
          <Card.Text>Fee:{total}</Card.Text>
          <Button variant="primary">Place Your Order</Button>
        </Card.Body>
      </Card>
    </div>
  );
}
