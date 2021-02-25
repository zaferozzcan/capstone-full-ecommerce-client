import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../Providers/StateProvider";

export default function Subtotal() {
  const history = useHistory();
  const [{ cart }] = useStateValue();
  const total = cart.reduce((acc, item) => item.price + acc, 0);
  return (
    <div className="subtotal-container">
      <p>
        Subtotal of {cart.length} {cart.length === 1 ? "item" : "items"}
        <strong>{` $${total.toFixed(2)}`}</strong>
      </p>
      <small className="gift">
        <input type="checkbox" />
        Update Shipping User Info
      </small>
      <Button
        variant="success"
        onClick={(e) => history.push("/payment")}
        className="checkout-button"
      >
        Go to Checkout
      </Button>
    </div>
  );
}
