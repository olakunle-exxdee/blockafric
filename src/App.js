import "./App.css";

import Nav from "./components/nav/Nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/nav/Home";
import Activity from "./components/nav/Activity";
import Wallet from "./components/nav/Wallet";
import Gift from "./components/nav/Gift";
import Market from "./components/nav/Market";
function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/activity">
            <Activity />
          </Route>
          <Route exact path="/wallet">
            <Wallet />
          </Route>
          <Route exact path="/market">
            <Market />
          </Route>
          <Route exact path="/earn">
            <Gift />
          </Route>
        </Switch>
        <Nav />
      </div>
    </Router>
  );
}

export default App;
