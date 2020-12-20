import React from 'react';
import NavbarComp from '../Components/NavbarComp';
import FooterComp from '../Components/FooterComp';
import PaginationComp from '../Components/PaginationComp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './Home';
import Review from './Review';
import Characters from './Characters';


function Overview() {
  return (
    <Router>
    <div className="App">
      <NavbarComp/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/overview" component={Overview}/>
          <Route exact path="/characters" component={Characters}/>
          <Route exact path="/review" component={Review}/>
        </Switch>
      <PaginationComp />
      <FooterComp />
    </div>
    </Router>
  );
}

export default Overview;
