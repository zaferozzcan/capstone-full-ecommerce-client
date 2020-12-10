import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateValue } from "../../Providers/StateProvider";

export default function CheckoutLeft() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout-left">
      <h3 className="checkout-header">Your Items</h3>
      {cart.map((item) => {
        return (
          <div style={{ border: "1px solid black", width: "80%" }}>
            <p>{item.title}</p>
            <div>
              <small>${item.price}</small>
            </div>
            <p>{<AiOutlineShopping size={90} />}</p>
          </div>
        );
      })}
    </div>
  );
}
