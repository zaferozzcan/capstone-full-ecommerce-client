import "../src/style/App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path={"/"} component={Home}>
          <Home />
        </Route>
        <Route exact path={"/checkout"} component={Checkout}>
          <Checkout />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
