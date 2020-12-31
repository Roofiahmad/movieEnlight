import React from "react";
import FooterComp from "../Components/FooterComp";
import Review from "./Review";
import Banner from "../Components/Banner";
import "../Components/All.css";

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
