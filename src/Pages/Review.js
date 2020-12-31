import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import "./Review.css";
import { Link, useParams } from "react-router-dom";
import ReviewPost from "../Components/ReviewPost";
import axios from "axios";
import ReviewCard from "./ReviewCard";

export default function Review() {
  const token = localStorage.getItem("token");
  const [review, setReview] = useState("");
  const [idfilm, setIdfilm] = useState(localStorage.getItem("id_film"));

  let title = localStorage.getItem("title_film");

  function getReview() {
    let url = `http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/review/show/movie/?movie_id=${idfilm}&page=1&limit=10`;
    axios.get(url).then((response) => {
      setReview(response.data.post);
    });
  }

  useEffect(() => {
    getReview();
    console.log("use effect in review.js");
  }, []);

  console.log(review);
  return (
    <div className="bg-black">
      <div className={classCss.category_container}>
        {token ? <ReviewPost idFilm={idfilm} /> : null}
        {review.length > 0 ? <ReviewCard dataReview={review} /> : null}
      </div>

      {/* <div className="container text-center">
        <button className="load">
          <b>load more</b>
        </button>
      </div> */}
    </div>
  );
}
