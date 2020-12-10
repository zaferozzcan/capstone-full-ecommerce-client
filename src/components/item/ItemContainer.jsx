import React from "react";
import Item from "./Item";

export default function ItemContainer(props) {
  return (
    <div className="item-container">
      <Item id={props.id} price={props.price} title={props.title} />
      <Item id={props.id} price={props.price} title={props.title} />
      <Item id={props.id} price={props.price} title={props.title} />
    </div>
  );
}
