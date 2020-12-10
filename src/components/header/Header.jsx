import React from "react";
import "../../style/Header.css";
import BrandLogo from "../../images/mzn-logo.png";
import { BsSearch } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Providers/StateProvider";

export default function Header() {
  // add logo
  // searcj bar and other child elements like signin
  // signout button maybe previous order and cart image

  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="header-container">
      {/*logo */}
      <div className="header-child brand-logo">
        <Link to={"/"}>
          <img className="brand-logo-item" src={BrandLogo} alt="brand-logo" />
        </Link>
      </div>
      {/* search bar */}
      <div className="header-child search-bar">
        <input
          className="search-bar-item"
          type="text"
          name="serach-bar"
          id="search-bar"
        />
        <span className="search-icon">
          <BsSearch size={20} />
        </span>
      </div>
      {/* signin/signout and greeting*/}
      <Link to={"/signin"}>
        <div className="header-child  sign-in">
          <span className="greeting">Hello User</span>
          <span className="sign-in-item">Sign In</span>
        </div>
      </Link>
      {/* your orders */}
      <div className="header-child order">
        <span className="orders">Your Orders</span>
      </div>
      {/* cart item */}
      <Link to={"/checkout"}>
        <div className="header-child cart">
          <FiShoppingCart size={20} />
          <span className="cart-item-count">
            {cart.length ? cart.length : 0}
          </span>
        </div>
      </Link>
    </div>
  );
}
