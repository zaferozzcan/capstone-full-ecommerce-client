import React from "react";
import "../../style/Item.css";
import { useStateValue } from "../../Providers/StateProvider";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";

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
        <Card.Title>${props.price}</Card.Title>
        {/* </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body> */}
        <motion.div
          style={{ size: "content" }}
          whileTap={{
            scale: 1.2,
            textShadow: "white 1.5px 1.5px",
            boxShadow: "white 1.5px 1.5px",
          }}
        >
          <Button onClick={addToCart} href="#">
            Add To Cart
          </Button>
        </motion.div>
      </Card.Body>
    </Card>
  );
}

// Array(rating).fill().map((_,i)=>(
//   <p>⭐️</p>
// ))
