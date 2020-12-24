import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Pages/Review";
import Overview from "./Pages/Overview";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";
import FilmDetails from "./Pages/FilmDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filmdetails" component={FilmDetails} />
          <Route exact path="/characters" component={Characters} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
