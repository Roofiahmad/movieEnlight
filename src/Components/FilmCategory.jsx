import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import FilmCard from "./FilmCard";
import axios from "axios";

export default function FilmCategory() {
  const [filmCat, setFilmCat] = useState("?page=1&limit=30");
  let searched = localStorage.getItem("searched");
  console.log(searched);

  const image_size = { width: "200px", height: "300px", borderRadius: "10px" };
  const listCategory = [
    "All",
    "Anime",
    "Action",
    "Adventure",
    "Science Fiction",
    "Comedy",
  ];

  const handleButtonCategory = (inputCat) => {
    switch (inputCat) {
      case "Anime":
      case "Action":
      case "Adventure":
      case "Science Fiction":
      case "Comedy":
        setFilmCat(`findGenre?genre=${inputCat}&page=1&limit=30`);
        break;
      default:
        setFilmCat("?page=1&limit=30");
    }
  };

  return (
    <div className={classCss.category_container}>
      <p className={classCss.category_text}>Browse by category</p>
      <div className={classCss.category_btn_container}>
        {listCategory.map((data, index) => (
          <button
            className={classCss.category_btn}
            key={index}
            id={data}
            onClick={(event) => {
              handleButtonCategory(event.target.id);
            }}
          >
            {data}
          </button>
        ))}
      </div>
      <FilmCard category={filmCat} image_size={image_size} />
    </div>
  );
}
