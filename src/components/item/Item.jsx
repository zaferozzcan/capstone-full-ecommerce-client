import React from "react";
import SampleProduct from "../../images/sample-product.jpg";
import "../../style/Item.css";

export default function Item(props) {
  return (
    <div className="items">
      <img className="item-info" src={SampleProduct} alt="" />
      <p>{props.title}</p>
      <div className="item-inner">
        <small>$</small>
        <strong>{props.price}</strong>
      </div>
      <button className="basket-button">Add To Cart</button>
    </div>
  );
}

// Array(rating).fill().map((_,i)=>(
//   <p>⭐️</p>
// ))
