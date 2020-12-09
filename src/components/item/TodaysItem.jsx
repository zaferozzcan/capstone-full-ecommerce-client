import React from "react";
import SampleProduct from "../../images/sample-product.jpg";
import "../../style/Item.css";

export default function Item() {
  return (
    <div className="items">
      <h1>
        <strong>Today's Deal</strong>
      </h1>
      <img className="item-info" src={SampleProduct} alt="" />
      <p>Ninja OS101 Foodi 9-in-1 Pressure Cooker and Air Fryer</p>
      <div className="item-inner">
        <small>$</small>
        <strong>20.99</strong>
      </div>
      <button className="basket-button">See More Details</button>
    </div>
  );
}
