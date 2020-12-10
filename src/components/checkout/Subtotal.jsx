import React from "react";
import { useStateValue } from "../../Providers/StateProvider";

export default function Subtotal() {
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
      <button className="checkout-button">Go to Checkout</button>
    </div>
  );
}
