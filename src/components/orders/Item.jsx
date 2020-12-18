import React from "react";
import { Card } from "react-bootstrap";
import "../../style/Orders.css";
export default function Item(props) {
  console.log(props);
  return (
    <div item="item-container">
      <Card style={{ width: "14rem", heigh: "12rem" }}>
        <Card.Img variant="top" src={props.item.image} />
        <Card.Body>
          <Card.Title>{props.item.title.substring(0, 8) + "..."}</Card.Title>
          <Card.Text>{props && props.item.title}</Card.Text>
        </Card.Body>
        {/* <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
        </ListGroup> */}
        <Card.Body className="button-and-price">
          <Card.Link href="#">Buy Again</Card.Link>
          <Card.Text>${props && props.item.price}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
