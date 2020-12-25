import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import classCss2 from "../Components/FilmCard.module.css";
import StarRatingComponent from "react-star-rating-component";
import { Form, Input } from "reactstrap";
import "./Review.css";
import { Link } from "react-router-dom";

export default function Overview() {
  // const detailSelector = ["Overview", "Review"];
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="bg-black">
      <div className={classCss.category_container}>
        <div className={classCss.category_btn_container}>
          <button className={classCss.category_btn}>Overview</button>
          <Link to="/review">
            <button className={classCss.category_btn}>Review</button>
          </Link>
        </div>
        <div className={classCss2.card_container}>Ini halaman Overview</div>
      </div>
    </div>
  );
}
