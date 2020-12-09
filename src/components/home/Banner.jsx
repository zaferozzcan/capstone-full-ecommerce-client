import React from "react";
import TodaysItem from "../item/TodaysItem";
import "../../style/Banner.css";

export default function Banner() {
  return (
    <div className="banner">
      <div className="banner-box">
        <h1 className="main-header">Holiday Deals</h1>
        {/* <div className="slogan-header">Spirits, up! Prices, down!</div> */}
        <div className="typewriter slogan-header ">
          <h1>Spirits, up! Prices, down!</h1>
        </div>
        <div className="deals">
          <TodaysItem />
        </div>
      </div>
    </div>
  );
}
