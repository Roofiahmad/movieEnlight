import React, { useEffect, useState } from "react";
import classCss from "./FilmCard.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const FilmCard = (props) => {
  const [movieArray, setMovie] = useState("");
  useEffect(() => {
    getData();
  }, [props]);
  function getData(category = props.category) {
    axios
      .get(
        `http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/${category}`
      )
      .then((response) => {
        response.data.posts
          ? setMovie(response.data.posts)
          : setMovie(response.data.data);
      })
      .catch((err) => console.log(err));
  }
  console.log(movieArray);

  return (
    <div className={classCss.card_container}>
      {movieArray.length > 0
        ? movieArray.map((data) => {
            let title = data.title.split(":");
            return (
              <Link to="/filmdetails">
                <div key={data.id} className={classCss.card}>
                  <img
                    className={classCss.card_image}
                    style={props.image_size}
                    src={data.poster}
                  />
                  <div className={classCss.text_container}>
                    <h5 className={classCss.title_text}>{title[0]}</h5>
                    <h5 className={classCss.title_text}>{title[1]}</h5>
                    <h6 className={classCss.category_text}>{data.genre}</h6>
                  </div>
                </div>
              </Link>
            );
          })
        : null}
    </div>
  );
};

export default FilmCard;
