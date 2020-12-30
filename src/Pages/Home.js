import React from "react";
import FilmCategory from "../Components/FilmCategory";
import FooterComp from "../Components/FooterComp";
import Carousels from "../Components/Carousel";
import "../Components/All.css";
function Home() {
  return (
    <div className="body">
      <Carousels />
      <FilmCategory />

      <FooterComp />
    </div>
  );
}

export default Home;
