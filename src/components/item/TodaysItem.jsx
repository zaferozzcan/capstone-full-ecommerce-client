import React from "react";
import SampleProduct from "../../images/sample-product.jpg";
import "../../style/Item.css";
import { Card, ListGroup, ListGroupItem, Button } from "react-bootstrap";

export default function Item() {
  useEffect(() => {}, []);
  return (
    <Card style={{ width: "14rem" }}>
      <Card.Img variant="top" src />
      <Card.Body>
        <Card.Text>"test"</Card.Text>
        <Card.Title>"hello"</Card.Title>
        {/* </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body> */}
        <Button onClick href="#">
          Add To Cart
        </Button>
      </Card.Body>
    </Card>
  );
}
