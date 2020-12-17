import React from "react";
import Item from "./Item";
import "../../style/ItemContainer.css";

export default function ItemContainer(props) {
  return (
    <div className="item-container">
      {props.products.map((item, index) => {
        return (
          <div key={index}>
            <Item
              id={item._id}
              image={item.image}
              price={item.price}
              title={item.title}
            />
          </div>
        );
      })}
    </div>
  );
}
