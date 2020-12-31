import React, { useState, useEffect } from "react";
import FooterComp from "../Components/FooterComp";
import classCss from "../Components/FilmCategory.module.css";
import "../Components/All.css";
import { BrowserRouter as Router, Link, useParams } from "react-router-dom";
import axios from "axios";
import bannerCss from "../Components/Banner.module.css";
import "./FilmDetails.css";
import StarRatingComponent from "react-star-rating-component";
import Overview from "./Overview";
import Review from "./Review";

function FilmDetails() {
  let filmId = useParams().title;
  let title = localStorage.getItem("title_film");
  const [id, setId] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [release, setRelease] = useState("");
  const [director, setDirector] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("");
  const [casts, setCasts] = useState("");
  const [genre, setGenre] = useState("");
  const [stars, setStars] = useState("");

  useEffect(() => {
    getMovie();
  }, []);

  const [overview, setOverview] = useState(true);
  const [review, setReview] = useState(false);

  const handleOverview = () => {
    console.log("overview click");
    setOverview(true);
    setReview(false);
  };
  const handleReview = () => {
    console.log("review click");
    setOverview(false);
    setReview(true);
  };
  function getMovie() {
    axios
      .get(
        `http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/get/${filmId}`
      )
      .then((response) => {
        localStorage.setItem("id_film", response.data.data.movieId);
        localStorage.setItem("title_film", response.data.data.title);
        setId(localStorage.getItem("id_film"));
        setSynopsis(response.data.data.synopsis);
        setRelease(response.data.data.release_date);
        setDirector(response.data.data.director);
        setPoster(response.data.data.poster);
        setTrailer(response.data.data.trailer);
        setCasts(response.data.data.characters);
        setGenre(response.data.data.genre);
      });
  }
  axios
    .get(
      `http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/review/rating/movie/?movie_id=${id}`
    )
    .then((response) => {
      let star = response.data.data;
      localStorage.setItem("stars", star);
      setStars(star);
    });

  return (
    <div className="body">
      <div
        style={{
          backgroundImage: `linear-gradient(rgba(7, 7, 7, 0.5), rgba(7, 7, 7, 0.5)), url(${poster})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container text-left">
          <div class="mb-4 text-white">
            <div class="pt-5">
              <h1 class=" title_text font-weight-bold mb-5">{title}</h1>
              <div className={bannerCss.rate_reviews}>
                <StarRatingComponent
                  value={`${stars}`}
                  emptyStarColor={"#fff"}
                />
              </div>
              <p class="synopsis_text">{synopsis}</p>
            </div>
            <div className={bannerCss.banner_btn_container} className="pb-5">
              <button
                className={bannerCss.banner_btn}
                onClick={() =>
                  window.open(trailer ? trailer : alert("Trailer Not Found!"))
                }
              >
                Watch Trailer
              </button>
              <button className={bannerCss.banner_btn}>Add to Watchlist</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blac">
        <div className="container text-left mt-4">
          <div className="mt-3">
            <button onClick={handleOverview} className={classCss.category_btn}>
              Overview
            </button>
            <button onClick={handleReview} className={classCss.category_btn}>
              Review
            </button>
          </div>
        </div>
        {overview ? (
          <Overview
            synopsis={synopsis}
            genre={genre}
            release={release}
            director={director}
            casts={casts}
          />
        ) : null}
        {review ? (
          <Review
            synopsis={synopsis}
            genre={genre}
            release={release}
            director={director}
            casts={casts}
          />
        ) : null}
      </div>
      <FooterComp />
    </div>
  );
}

export default FilmDetails;
