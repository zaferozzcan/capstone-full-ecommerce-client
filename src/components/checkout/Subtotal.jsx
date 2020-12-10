import React from "react";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../Providers/StateProvider";

export default function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();
  const total = cart.reduce((acc, item) => item.price + acc, 0);
  return (
    <div className="subtotal-container">
      <p>
        Subtotal of {cart.length} {cart.length === 1 ? "item" : "items"}
        <strong>{` $${total}`}</strong>
      </p>
      <small className="gift">
        <input type="checkbox" />
        This is a gift
      </small>
      <button
        onClick={(e) => history.push("/payment")}
        className="checkout-button"
      >
        Go to Checkout
      </button>
    </div>
  );
}
