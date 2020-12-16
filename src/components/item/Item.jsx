import React from "react";
import SampleProduct from "../../images/sample-product.jpg";
import "../../style/Item.css";
import { useStateValue } from "../../Providers/StateProvider";

export default function Item(props) {
  const [{ cart }, dispatch] = useStateValue();
  function addToCart() {
    dispatch({
      type: "ADD_ITEM",
      item: {
        id: props.id,
        title: props.title,
        image: props.image,
        price: props.price,
        rating: "",
      },
    });
  }
  return (
    <div className="items">
      <img className="item-info" src={props.image} alt="" />
      <p>{props.title.substring(0, 50) + "..."}</p>
      <div className="item-inner">
        <small>$</small>
        <strong>{props.price}</strong>
      </div>
      <button onClick={addToCart} className="basket-button">
        Add To Cart
      </button>
    </div>
  );
}

// Array(rating).fill().map((_,i)=>(
//   <p>⭐️</p>
// ))
