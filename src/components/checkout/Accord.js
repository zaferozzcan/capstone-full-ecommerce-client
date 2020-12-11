import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import "../../style/Payment.css";
import { useStateValue } from "../../Providers/StateProvider";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import CcModal from "./CcModal";

export default function Accord() {
  const [{ cart }, dispatch] = useStateValue();
  // const stripe = useStripe();
  // const elements = useElements();
  // console.log("cart in accord", cart);
  function handleRemove(id) {
    dispatch({ type: "REMOVE_ITEM", id: id });
  }
  function openModal() {
    dispatch({
      type: "SHOW_MODAL",
      modal: true,
    });
  }

  return (
    <div className="accord">
      <br></br>
      <Link>
        <h4 className="Accord-heading">
          {cart.length >= 1
            ? `Checkout your ${cart.length} item`
            : "You dont have any item in your cart"}
        </h4>
      </Link>
      <div className="payment-container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
                Shipping Address
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>58 Kent Street, Quincy, MA, 02169</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="1">
                Payment Method
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              {/* <form>
                <CardElement />
              </form> */}
              <Card.Body>
                Visa ending 2222 <button onClick={openModal}>change</button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey="2">
                Review items
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Item</th>
                      <th>Price</th>
                      <th></th>
                    </tr>
                  </thead>
                  {cart.length === 0
                    ? "There is no item in the cart"
                    : cart.map((item, index) => {
                        return (
                          <>
                            <tbody>
                              <tr>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>
                                  {" "}
                                  <button
                                    onClick={() => handleRemove(item.id)}
                                    className="accordion-remove-button"
                                  >
                                    X
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </>
                        );
                      })}
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
