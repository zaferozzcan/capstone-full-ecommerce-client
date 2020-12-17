import React, { useEffect } from "react";
import { useStateValue } from "../../Providers/StateProvider";
import axios from "axios";
import "../../style/Item.css";
import { Card, Button } from "react-bootstrap";
const today = Date().split(" ")[0];
const alterItem = {
  title:
    "Apple Smart Keyboard Folio for iPad Pro 12.9-inch (4th Generation) - US English",
  price: 141.73,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/615LSep2qnL._AC_SL1000_.jpg\n\n",
  category: "electronic",
};
export default function Item() {
  const [{ todaysItem }, dispatch] = useStateValue();

  useEffect(() => {
    axios("https://capstone-store-api.herokuapp.com/item")
      .then((res) => {
        console.log("length", res.data.length);
        console.log("random", Math.floor(Math.random() * res.data.length - 2));
        dispatch({
          type: "ADD_TODAYS_ITEM",
          todaysItem: {
            item: res.data[Math.floor(Math.random() * res.data.length - 2)],
            day: today,
          },
        });
      })
      .catch((err) => console.log(err.message));
  }, []);
  // console.log("todaysItem", todaysItem && todaysItem.item);
  return (
    <div className="todays-item">
      <Card style={{ width: "16rem" }}>
        <Card.Title>Popular Item</Card.Title>
        <Card.Img
          variant="top"
          src="https://images-na.ssl-images-amazon.com/images/I/615LSep2qnL._AC_SL1000_.jpg"
        />
        <Card.Body>
          <Card.Text>
            Apple Smart Keyboard Folio for iPad Pro 12.9-inch (4th
            Generation)Keyboard Folio for iPad Folio for iPad Pro 12.9-inch
          </Card.Text>
          <Card.Text>$149.99</Card.Text>
          <Button onClick href="#">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
