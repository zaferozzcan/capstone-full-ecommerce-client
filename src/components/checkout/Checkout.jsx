import React from "react";
import "../../style/Checkout.css";
import CheckoutRight from "./CheckoutRight";
import CheckoutLeft from "./CheckoutLeft";
import { useStateValue } from "../../Providers/StateProvider";

export default function Checkout() {
  const [{ user, cart }, dispatch] = useStateValue();

  return (
    <>
      <div className="checkout-banner">
        {user
          ? "Thanks for your business"
          : "Sign Up for Our Credit Cart to Get 10% Off!"}
      </div>
      <div className="checkout-container">
        <CheckoutLeft />
        <CheckoutRight />
      </div>
    </>
  );
}
