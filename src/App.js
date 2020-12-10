import "../src/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import SignIn from "./components/auth/SignIn";
import { Switch, Route } from "react-router-dom";

function App() {
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
      </Switch>
    </div>
  );
}

export default App;
