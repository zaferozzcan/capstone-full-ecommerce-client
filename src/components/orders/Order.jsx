import React from "react";
import Item from "./Item";
import "../../style/Orders.css";

export default function Order(props) {
  return (
    <div className="order">
      {props &&
        props.orderItems.map((item, index) => {
          return <Item key={index} item={item} />;
        })}
    </div>
  );
}
