import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Accordion, Card, Button, Table } from "react-bootstrap";
import "../../style/Payment.css";
import { useStateValue } from "../../Providers/StateProvider";
import AddressSearch from "../UserAddress/AddressSearch";

export default function Accord() {
  const [{ cart, address, user }, dispatch] = useStateValue();
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

      <h4 className="Accord-heading">
        {cart.length >= 1 ? (
          <h2>Checkout your {cart.length} item</h2>
        ) : (
          <h2>You don't have any item in your cart</h2>
        )}
      </h4>

      <div className="payment-container">
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="light" eventKey="0">
                Shipping Address
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <div>
                  <AddressSearch />

                  {address && (
                    <p>
                      Your Address: <strong>{address}</strong>...
                      <div>
                        <small>
                          <Link to={"/useraddress"}>
                            <Button> See Your Address on Map</Button>
                          </Link>
                        </small>
                      </div>
                    </p>
                  )}
                </div>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="light" eventKey="1">
                Payment Method
              </Accordion.Toggle>
            </Card.Header>

            <Accordion.Collapse eventKey="1">
              <Card.Body>
                {user && user.email === "zaferozzcan@gmail.com"
                  ? "Saved Card ending 4242"
                  : null}
                <span style={{ marginLeft: "5px" }}>
                  <Button variant="warning" onClick={openModal}>
                    {user && user.email === "zaferozzcan@gmail.com"
                      ? "Change"
                      : "Add"}
                  </Button>
                </span>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="light" eventKey="2">
                Review items
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <Table striped bordered hover>
                  {cart.length === 0 ? (
                    <Link to={"/"}>
                      <div style={{ margin: "5px 0" }}>
                        <Button variant="dark">
                          There is no item in the cart{" "}
                        </Button>
                      </div>
                    </Link>
                  ) : (
                    cart.map((item, index) => {
                      return (
                        <>
                          <thead>
                            <tr>
                              <th>Item</th>
                              <th>Price</th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>{item.title}</td>
                              <td>${item.price}</td>
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
                    })
                  )}
                </Table>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    </div>
  );
}
