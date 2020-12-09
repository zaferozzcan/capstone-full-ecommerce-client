import "../src/style/App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={(Header, Home)}>
          <Header />
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
