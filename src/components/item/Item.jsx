import React from "react";
import SampleProduct from "../../images/sample-product.jpg";
import "../../style/Item.css";
import { useStateValue } from "../../Providers/StateProvider";

export default function Item(props) {
  const [{ cart }, dispatch] = useStateValue();
  console.log("this is cart", cart);
  function addToCart() {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: 0,
        title: props.title,
        image: "",
        price: props.price,
        rating: "",
      },
    });
  }
  return (
    <div className="items">
      <img className="item-info" src={SampleProduct} alt="" />
      <p>{props.title}</p>
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
