import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useStateValue } from "../../Providers/StateProvider";

import "../../style/CcModal.css";

export function CcModal() {
  const [{ modal }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleChange(event) {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  }

  function closeModal() {
    dispatch({
      type: "CLOSE_MODAL",
      modal: false,
    });
  }
  console.log("disabled", processing);

  return (
    <div>
      <div id="modal">
        <div id="modal-textbox">
          <h1>Add Credit Cart</h1>
          <form>
            <CardElement />
          </form>

          <div id="modal-footer">
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// import { Button, Modal } from "react-bootstrap";

// export function CcModal() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button variant="primary" onClick={handleShow}>
//         Launch demo modal
//       </Button>

//       <Modal show={show} onHide={handleClose} animation={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Modal heading</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }
