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
        {/* <ItemContainer
          id="121224243"
          price={20}
          title={"Wyze Cam 1080p HD Indoor Wireless Smart Home Camera"}
        />
        <ItemContainer
          id="88989789"
          price={15}
          title={"Echo Dot (3rd Gen) - Smart speaker with Alexa"}
        />
        <ItemContainer
          id="8908987967"
          price={125.99}
          title={"Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition"}
        /> */}
        {/* {products.map((item) => {
          return (
            <ItemContainer
              id={item._id}
              price={item.price}
              title={item.title}
              image={item.image}
            />
          );
        })} */}

        <ItemContainer products={products} />
      </div>
    </div>
  );
}
