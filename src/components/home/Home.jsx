import React from "react";
import ItemContainer from "../item/ItemContainer";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container-inner">
        <Banner />
        <ItemContainer />
      </div>
    </div>
  );
}
