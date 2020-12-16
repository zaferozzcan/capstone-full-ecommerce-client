import React from "react";
import "../../style/Item.css";
import { useStateValue } from "../../Providers/StateProvider";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function Item(props) {
  const [{ cart }, dispatch] = useStateValue();
  function addToCart() {
    dispatch({
      type: "ADD_ITEM",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: "",
      },
    });
  }
  return (
    // <div className="items">
    //   <img className="item-info" src={props.image} alt="" />
    //   <p>{props.title.substring(0, 50) + "..."}</p>
    //   <div className="item-inner">
    //     <small>$</small>
    //     <strong>{props.price}</strong>
    //   </div>
    //   <button onClick={addToCart} className="basket-button">
    //     Add To Cart
    //   </button>
    // </div>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Text>{props.title}</Card.Text>
        <Card.Title>{props.price}</Card.Title>
        {/* </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body> */}
        <Button onClick={addToCart} href="#">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}

// Array(rating).fill().map((_,i)=>(
//   <p>⭐️</p>
// ))
