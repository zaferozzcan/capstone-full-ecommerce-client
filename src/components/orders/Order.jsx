import React from "react";
import Item from "./Item";
import "../../style/Orders.css";

export default function Order() {
  return (
    <div className="order">
      <Item />
      <Item />
    </div>
  );
}
