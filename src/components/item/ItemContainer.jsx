import React from "react";
import Item from "./Item";

export default function ItemContainer(props) {
  return (
    <div className="item-container">
      <Item price={props.price} title={props.title} />
      <Item price={props.price} title={props.title} />
      <Item price={props.price} title={props.title} />
    </div>
  );
}
