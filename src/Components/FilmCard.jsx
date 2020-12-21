import React from "react";
import classCss from "./FilmCard.module.css";

const FilmCard = (props) => {
  return (
    <div className={classCss.card_container}>
      {props.list.map((data, index) => (
        <div className={classCss.card}>
          <img
            className={classCss.card_image}
            style={props.image_size}
            src={data.imageUrl}
          />
          <h5 className={classCss.title_text}>{data.title}</h5>
          <h6 className={classCss.category_text}>{data.category}</h6>
        </div>
      ))}
    </div>
  );
};

export default FilmCard;
