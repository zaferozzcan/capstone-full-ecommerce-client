import React from "react";
import "../../style/Header.css";
import BrandLogo from "../../images/mzn-logo.png";

export default function Header() {
  // add logo
  // searcj bar and other child elements like signin
  // signout button maybe previous order and cart image
  return (
    <div className="header-container">
      {/*logo */}
      <div className="header-child one">
        <img className="brand-logo" src={BrandLogo} alt="brand-logo" />
      </div>
      {/* search bar */}
      <div className="header-child two">
        <input
          className="search-bar"
          type="text"
          name="serach-bar"
          id="search-bar"
        />
        <img src="" alt="" />
      </div>
      {/* signin/signout and greeting*/}
      <div className="header-child three">
        <span className="greeting">Hello User</span>
        <span className="signIn">Sign In</span>
      </div>
      {/* your orders */}
      <div className="header-child four">
        <span className="orders"></span>
      </div>
      {/* cart item */}
      <div className="header-child five">
        <span>Cart icon</span>
      </div>
    </div>
  );
}
