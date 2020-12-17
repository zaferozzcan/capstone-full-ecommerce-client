import React from "react";
import { AiOutlineShopping } from "react-icons/ai";
import { useStateValue } from "../../Providers/StateProvider";
import { auth } from "../../firebase";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function CheckoutLeft() {
  const [{ cart, user }, dispatch] = useStateValue();

  function removeItem(id) {
    // console.log("item id", id);
    dispatch({
      type: "REMOVE_ITEM",
      id: id,
    });
  }
  // console.log("cart", cart);
  return (
    <div className="checkout-left">
      <h2>Hello, {user && user.email}</h2>
      {cart && cart.length ? (
        <h3 className="checkout-header">Checkout Your Items</h3>
      ) : (
        <h3>Your Card Is Empty</h3>
      )}
      {cart.map((item, index) => {
        return (
          <div>
            <Card>
              <Card.Body>
                <Card.Text>{item.title}</Card.Text>
              </Card.Body>
              <Card.Img variant="bottom" src={item.image} />
              <Button variant="danger" onClick={() => removeItem(item.id)}>
                Remove
              </Button>
            </Card>
          </div>

          // <div key={index} style={{ border: "1px solid black", width: "80%" }}>
          //   <p>{item.title}</p>
          //   <div>
          //     <small>${item.price}</small>
          //   </div>
          //   <p>{<AiOutlineShopping size={90} />}</p>
          //   <button onClick={() => removeItem(item.id)}>Remove</button>
          // </div>
        );
      })}
    </div>
  );
}
