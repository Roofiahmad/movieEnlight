import React from "react";
import FilmCategory from "../Components/FilmCategory";
import FooterComp from "../Components/FooterComp";
import PaginationComp from "../Components/PaginationComp";
import Carousels from "../Components/Carousel";
import classCss from "./Home.module.css";
function Home() {
  return (
    <div>
      <Carousels />
      <FilmCategory />
      <PaginationComp />
      <FooterComp />
    </div>
  );
}

export default Home;
