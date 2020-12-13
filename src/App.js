import React, { useEffect } from "react";
import "../src/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import Payment from "./components/checkout/Payment";
import Orders from "./components/orders/Orders";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Providers/StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CcModal } from "./components/checkout/CcModal";
import UserAddress from "./components/UserAddress/UserAddress.jsx";

const stripePromise = loadStripe(
  "pk_test_51HwwtFIiGEr9G3vir61e9L9f7CiuVUbckThzfjo8VVapT7Gi4ZxAcQdw57AxQxHE7pXYOoM2mqgrpyLiszOdRLtm00w9quzvcz"
);

function App() {
  const [{ modal, address }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log("user ", authUser);

      if (authUser) {
        dispatch({
          type: "LOGIN_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "LOGIN_USER",
          user: null,
        });
      }
    });
  }, []);

  // console.log("modal", modal);
  console.log("address in appjs", address);
  return (
    <div className="App">
      {modal && (
        <Elements stripe={stripePromise}>
          <CcModal />
        </Elements>
      )}

      <Switch>
        <Route exact path={"/"}>
          <Header />
          <Home />
        </Route>
        <Route exact path={"/checkout"}>
          <Header />
          <Checkout />
        </Route>
        <Route exact path={"/signin"}>
          <SignIn />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path={"/payment"}>
          <Header />
          <Elements stripe={stripePromise}>
            <Payment />
          </Elements>
        </Route>
        <Route exact path={"/orders"}>
          <Header />
          <Orders />
        </Route>
        <Route exact path={"/useraddress"}>
          <UserAddress />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
