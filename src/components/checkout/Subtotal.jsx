import React from "react";
import CurrencyFormat from "react-currency-format";

export default function Subtotal() {
  return (
    <div className="subtotal-container">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal: 0 items
              <strong> 0</strong>
            </p>
            <small className="gift">
              <input type="checkbox" />
              This is a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeperator={true}
        prefix={"$"}
      />
      <button className="checkout-button">Go to Checkout</button>
    </div>
  );
}
