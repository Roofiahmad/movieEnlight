import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import classCss2 from "../Components/FilmCard.module.css";
import StarRatingComponent from "react-star-rating-component";
import { Form, Input } from "reactstrap";
import "./Overview.css";
import "./FilmDetails.css";
import axios from "axios";

export default function Overview(props) {
  return (
    <div className="container mt-5 mb-5">
      <div className="mb-5">
        <h2 className="decorated">
          <span>Synopsis</span>
        </h2>
        <p>{props.synopsis}</p>
      </div>
      <div className="mt-5">
        <h2 class="decorated">
          <span>More Info</span>
        </h2>
        <p className="mt-3">
          <strong>Genre: </strong>
          {props.genre}
        </p>
        <p className="mt-3">
          <strong>Release Date: </strong>
          {props.release}
        </p>
        <p>
          <strong>Director: </strong>
          {props.director}
        </p>
        <p>
          <strong>Casts: </strong>
          {props.casts}
        </p>
      </div>
    </div>
  );
}
