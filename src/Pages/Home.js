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
function Home() {
  return (
    <div className="body">
      <Carousels />
      <FilmCategory />
      <PaginationComp />   
      <FooterComp />  
       </div>
  );
}

export default Home;
