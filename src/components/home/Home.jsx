import React from "react";
import ItemContainer from "../item/ItemContainer";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container-inner">
        <Banner />
        <ItemContainer
          price={25.99}
          title={"Wyze Cam 1080p HD Indoor Wireless Smart Home Camera"}
        />
        <ItemContainer
          price={15.99}
          title={"Echo Dot (3rd Gen) - Smart speaker with Alexa"}
        />
        <ItemContainer
          price={125.99}
          title={"Toshiba TF-32A710U21 32-inch Smart HD TV - Fire TV Edition"}
        />
      </div>
    </div>
  );
}
