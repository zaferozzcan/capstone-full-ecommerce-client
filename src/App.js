import React, { useEffect } from "react";
import "../src/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import SignIn from "./components/auth/SignIn";
import Register from "./components/auth/Register";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValue } from "./Providers/StateProvider";

function App() {
  const [{}, dispatch] = useStateValue();

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

  return (
    <div className="App">
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
          <Payment />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
