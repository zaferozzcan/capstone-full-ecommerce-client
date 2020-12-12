import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import "../../style/Orders.css";
export default function Item() {
  return (
    <div item="item-container">
      <Card style={{ width: "15rem", heigh: "13rem" }}>
        <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Buy Again</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
}
