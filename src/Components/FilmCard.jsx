import React, { useEffect, useState } from "react";
import classCss from "./FilmCard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const FilmCard = (props) => {
  const [movieArray, setMovie] = useState("")
  useEffect(() => {
    getData()
  },[]);
  function getData() {
    axios.get( "https://cors-anywhere.herokuapp.com/" +
      "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/?page=1&limit=30",
      )
      .then( ( response ) => {
        console.log( response, "GET MOVIE DATA SUCCESS" );
        let title = response.data.posts;
        console.log(response.data.posts, "INI LIST ISI TITLE");
        // setTitle(title);
        localStorage.setItem("movie", "GET");
        setMovie(response.data.posts);
        localStorage.removeItem("id_film");
      });
  }

  console.log("GUYS INI STATENYAA", movieArray);
  
  return (
    
    <div className={classCss.card_container}>
    { 
    movieArray.length > 0 ? movieArray.map(data => {
      return(
        <Link to={`/filmdetails/${data.title}`}>
        <div key={data.id} className={classCss.card}>
          <img
            className={classCss.card_image}
            style={props.image_size}
            src={data.poster}
          />
          <h5 className={classCss.title_text}>{data.title}</h5>
          <h6 className={classCss.category_text}>{data.genre}</h6>
        </div>
        </Link>
        )
      })
    :null}
      
    </div>
  );
};

export default FilmCard;
