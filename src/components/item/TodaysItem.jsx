import React, { useEffect } from "react";
import { useStateValue } from "../../Providers/StateProvider";
import axios from "axios";
import "../../style/Item.css";
import { Card, Button } from "react-bootstrap";
import { motion } from "framer-motion";
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
        console.log("length", res.data);
        console.log("random", Math.floor(Math.random() * res.data.length) - 1);
        dispatch({
          type: "ADD_TODAYS_ITEM",
          todaysItem: {
            item: res.data[Math.floor(Math.random() * res.data.length) - 1],
            day: today,
          },
        });
      })
      .catch((err) => console.log(err.message));
  }, []);
  // console.log("todaysItem", todaysItem && todaysItem.item);
  return (
    <motion.div
      initial={{
        y: "-110vh",
      }}
      animate={{
        y: 0,
      }}
      transition={{ delay: 0.7 }}
      className="todays-item"
    >
      <Card style={{ width: "16rem" }}>
        <Card.Title>Today's Deal</Card.Title>
        <Card.Img
          variant="top"
          src="https://images-na.ssl-images-amazon.com/images/I/51YUEwsfoCL._AC_.jpg"
          // {
          //   todaysItem && todaysItem ? todaysItem.item.image : alterItem.image
          // }
        />
        <Card.Body>
          <Card.Text>
            Plugo Letters by PlayShifu - Word Building with Phonics, Stories,
            Puzzles | 5-10 Years Educational STEM Toy| Boys & Girls Gift
            {/* {todaysItem
              ? todaysItem.item.title.substring(0, 80) + "..."
              : alterItem.title} */}
          </Card.Text>
          <Card.Text>
            $59
            {/* ${todaysItem ? todaysItem.item.price : alterItem.price} */}
          </Card.Text>
          <Button onClick href="#">
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </motion.div>
  );
}
