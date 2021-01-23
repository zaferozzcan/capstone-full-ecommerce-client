import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemContainer from "../item/ItemContainer";
import Banner from "./Banner";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios("https://capstone-store-api.herokuapp.com/item")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="home-container">
      <div className="home-container-inner">
        <Banner />
        <ItemContainer products={products} />
      </div>
    </div>
  );
}
