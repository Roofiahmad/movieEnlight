import React from "react";
import "./App.css";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter as Router, Switch, Route, useHistory, Redirect } from "react-router-dom";
import Review from "./Pages/Review";
import Overview from "./Pages/Overview";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";
import FilmDetails from "./Pages/FilmDetails";
import AdminDashboard from "./Pages/AdminDashboard";
import UserSetting from "./Pages/UserDashboard";
import FilmReview from "./Pages/FilmReview";

function App() {
  const token = localStorage.getItem("token");
  return (
    <Router>
      <div className="App">
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/filmdetails/:title" component={FilmDetails} />
          <Route exact path="/characters" component={Characters} />
          {token ? (
          <Route exact path="/admin" component={AdminDashboard} />
          ) : ( <Redirect to="/" />
          )}
          {token ? (
          <Route exact path="/user" component={UserSetting} />
          ) : ( <Redirect to="/" />
          )}
          <Route exact path="/review/:id" component={Review} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
