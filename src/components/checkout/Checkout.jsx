import React from "react";
import "../../style/Checkout.css";
import CheckoutRight from "./CheckoutRight";
import CheckoutLeft from "./CheckoutLeft";

export default function Checkout() {
  return (
    <>
      <div className="checkout-banner">
        Sign Up for Our Credit Cart to Get 10% Off!
      </div>
      <div className="checkout-container">
        <CheckoutLeft />
        <CheckoutRight />
      </div>
    </>
  );
}
