import React, { useState, useEffect } from "react";
import FilmCategory from "../Components/FilmCategory";
import FooterComp from "../Components/FooterComp";
import PaginationComp from "../Components/PaginationComp";
import Carousels from "../Components/Carousel";
import classCss from "../Components/FilmCategory.module.css";
import Characters from "./Characters";
import Review from "./Review";
import Banner from "../Components/Banner";
import "../Components/All.css"
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import axios from "axios";
import bannerCss from '../Components/Banner.module.css'
import "./FilmDetails.css";
import StarRatingComponent from "react-star-rating-component";


function FilmDetails() {
  let { title } = useParams();
  const [id, setId] = useState("");
  const [synopsis, setSynopsis] = useState("");
  const [release, setRelease] = useState("");
  const [director, setDirector] = useState("");
  const [poster, setPoster] = useState("");
  const [trailer, setTrailer] = useState("")
  console.log("INI TUH TITLE", title);
  useEffect(() => {
    getMovie()
  },[]);
  function getMovie() {
    axios.get(`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/get/${title}`
      ).then( ( response ) => {
        console.log( "INI TUH RESPONSE", response )
        console.log("INI TUH FILM ID", response.data.data.movieId);
        localStorage.setItem("id_film", response.data.data.movieId);
        localStorage.setItem("title_film", response.data.data.title);
        // console.log( response.data.post )
        // localStorage.setItem("ID", response.data.post)
        setId(localStorage.getItem("id_film"));
        setSynopsis(response.data.data.synopsis);
        setRelease(response.data.data.release_date);
        setDirector(response.data.data.director);
        setPoster(response.data.data.poster);
        setTrailer(response.data.data.trailer);
      })
  }


  return (  
      <div className="body">
        <div style={{ backgroundImage: `linear-gradient(rgba(7, 7, 7, 0.6), rgba(7, 7, 7, 0.6)), url(${poster})`}}>
          <div className="container text-left">
          <div class="mb-4 text-white">
            <div class="pt-5">
              <h1 class="display-4 font-weight-bold">{title}</h1>
              <p class="lead my-3">MLorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              cumque doloribus, sed ratione, blanditiis fugiat commodi illo
              inventore eius quae perferendis vel doloremque amet odio animi minus
              architecto corrupti fuga!</p>
            </div>
            <div className={bannerCss.banner_btn_container} className="pb-5">
              {/* <a href={`${trailer ? trailer : alert("Trailer Not Found!")}`} >
              <button className={bannerCss.banner_btn}>Watch Trailer</button>
              </a> */}
              <button className={bannerCss.banner_btn} onClick={() => window.open(trailer ? trailer : alert("Trailer Not Found!"))} >Watch Trailer</button>
              <button className={bannerCss.banner_btn}>Add to Watchlist</button>
            </div>
          </div>
          </div>
        </div>
        <div className="bg-blac">
          <div className="container text-left mt-4">
          <div className="mt-3">
                <button className={classCss.category_btn}>Overview</button>
              <Link to={`/review/${id}`}>
              <button className={classCss.category_btn}>Review</button>
              </Link>
            </div>
          </div>
          <div className="container mt-5 mb-4"> 
            <div className="mb-5">
              <h2 className="decorated"><span>Synopsis</span></h2>
              <p>{synopsis}</p>
            </div>
            <div className="mt-5">
              <h2 class="decorated"><span>More Info</span></h2>
              <p className="mt-3"><strong>Release Date: </strong>{release}</p>
              <p><strong>Director: </strong>{director}</p>
            </div>
          </div>
        </div>
      <FooterComp />     
      </div>
   
  );
}

export default FilmDetails;
