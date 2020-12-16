import React from "react";
import Item from "./Item";

export default function ItemContainer(props) {
  return (
    <div className="item-container">
      {/* <Item
        id={props.id}
        price={props.price}
        title={props.title}
        image={props.image}
      /> */}
      {props.products.map((item) => {
        return (
          <Item
            id={item._id}
            image={item.image}
            price={item.price}
            title={item.title}
          />
        );
      })}
    </div>
  );
}
