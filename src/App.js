<<<<<<< HEAD
import React from "react";
import NavbarComp from "./Components/NavbarComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Review from "./Pages/Review";
import Overview from "./Pages/Overview";
import Characters from "./Pages/Characters";
import Home from "./Pages/Home";
=======
import React from 'react';
import './App.css';
import NavbarComp from './Components/NavbarComp';
import FooterComp from './Components/FooterComp';
import PaginationComp from './Components/PaginationComp';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Review from './Pages/Review';
import Overview from './Pages/Overview';
import Characters from './Pages/Characters';
import Home from './Pages/Home';
import Carousels from './Components/Carousel';

>>>>>>> 106ea4ccc3833d13794bff06d159be006c053e55

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
<<<<<<< HEAD
      </div>
=======
      <PaginationComp />
      <FooterComp />
    </div>
>>>>>>> 106ea4ccc3833d13794bff06d159be006c053e55
    </Router>
  );
}

export default App;
