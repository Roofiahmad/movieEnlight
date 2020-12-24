import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Pages/Review";
import Overview from "./Pages/Overview";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";
import FilmDetails from "./Pages/FilmDetails";
import AdminDashboard from "./Pages/AdminDashboard";
import UserSetting from "./Pages/UserDashboard";
import FilmReview from "./Pages/FilmReview";

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filmdetails" component={FilmDetails} />
          <Route exact path="/characters" component={Characters} />
          <Route exact path="/admin" component={AdminDashboard} />
          <Route exact path="/user" component={UserSetting} />
          <Route exact path="/filmreview" component={FilmReview} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
