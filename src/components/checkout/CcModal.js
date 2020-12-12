import React, { useState } from "react";
import { CardElement, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../../Providers/StateProvider";

import "../../style/CcModal.css";

export function CcModal() {
  const [{}, dispatch] = useStateValue();
  const [card, setCard] = useState("");

  const elements = useElements();
  function handleSubmit(event) {
    console.log("onsubmit");
    event.preventDefault();
    // console.log("submit card", elements.getElement(CardElement));
  }

  function closeModal() {
    dispatch({
      type: "CLOSE_MODAL",
      modal: false,
    });
  }

  function addCcInfo() {
    console.log("cc info send");
    dispatch({
      type: "ADD_CC",
      card: elements.getElement("card"),
    });
  }

  function handleChange(e) {
    console.log("elements", elements.getElement("card"));
  }

  return (
    <div>
      <div id="modal">
        <div id="modal-textbox">
          <h1>Add Credit Cart</h1>
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <button onClick={addCcInfo} type="submit">
              {" "}
              Ok{" "}
            </button>
          </form>

          <div id="modal-footer">
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}
