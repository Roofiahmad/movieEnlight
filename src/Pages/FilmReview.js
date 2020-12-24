import React from "react";
import FilmCategory from "../Components/FilmCategory";
import FooterComp from "../Components/FooterComp";
import PaginationComp from "../Components/PaginationComp";
import Carousels from "../Components/Carousel";
import classCss from "./Home.module.css";
import Characters from "./Characters";
import Review from "./Review";
import Banner from "../Components/Banner";
import "../Components/All.css"
import Overview from "./Overview";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function FilmReview() {
  return (
  
        <div className="body">
        <Banner />
        <Review />
        <FooterComp />     
        </div>
   
  );
}

export default FilmReview;
