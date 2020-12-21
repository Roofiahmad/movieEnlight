import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Pages/Review";
import Overview from "./Pages/Overview";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/overview" component={Overview} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/review" component={Review} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
