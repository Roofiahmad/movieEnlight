import React from "react";
import FilmCategory from "../Components/FilmCategory";
import FooterComp from "../Components/FooterComp";
import PaginationComp from "../Components/PaginationComp";
import Carousels from "../Components/Carousel";
function Home() {
  return (
    <div className="App">
      <Carousels />
      <FilmCategory />
      <PaginationComp />
      <FooterComp />
    </div>
  );
}

export default Home;
