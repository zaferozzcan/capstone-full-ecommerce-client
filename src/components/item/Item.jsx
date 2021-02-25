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
    <div style={{ borderRadius: "10px" }}>
      <Card style={{ width: "18rem" }}>
        <motion.div
          whileHover={{
            scale: 1.8,
            transition: {
              stiffness: 0,
            },
          }}
        >
          <Card.Img variant="top" src={props.image} />
        </motion.div>
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
              scale: 1.3,
              textShadow: "white 1.5px 1px",
              boxShadow: "white 1.5px 1px",
            }}
            transition={{ stiffness: 300 }}
          >
            <Button onClick={addToCart} href="#">
              Add To Cart
            </Button>
          </motion.div>
        </Card.Body>
      </Card>
    </div>
  );
}

// Array(rating).fill().map((_,i)=>(
//   <p>⭐️</p>
// ))
