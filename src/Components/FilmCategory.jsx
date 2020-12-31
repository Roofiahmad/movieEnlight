import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import FilmCard from "./FilmCard";
import PaginationComp from "../Components/PaginationComp";

export default function FilmCategory() {
  const [limit, setLimit] = useState("10");
  const [page, setPage] = useState("1");
  const [cat, setCat] = useState("All");
  const [filmCat, setFilmCat] = useState(`?page=${page}&limit=${limit}`);
  let searched = localStorage.getItem("searched");
  if (searched) {
    setFilmCat(`findTitle?title=${searched}`);
    localStorage.removeItem("searched");
  }

  if (searched) {
    setFilmCat(`findTitle?title=${searched}`);
    localStorage.removeItem("searched");
  }

  const listCategory = [
    "All",
    "Anime",
    "Action",
    "Adventure",
    "Science Fiction",
    "Comedy",
  ];

  const handleButtonCategory = (inputCat) => {
    setCat(inputCat);
    switch (inputCat) {
      case "Anime":
      case "Action":
      case "Adventure":
      case "Science Fiction":
      case "Comedy":
        setFilmCat(`findGenre?genre=${inputCat}&page=${page}&limit=${limit}`);
        break;
      default:
        setFilmCat(`?page=${page}&limit=${limit}`);
    }
  };

  const handlePagination = (page) => {
    setPage(page);
    page > 1 && cat !== "All"
      ? setFilmCat(`findGenre?genre=${cat}&page=${page}&limit=${limit}`)
      : setFilmCat(`?page=${page}&limit=${limit}`);
    setPage("1");
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
      <FilmCard category={filmCat} />
      <PaginationComp handlePagination={handlePagination} />
    </div>
  );
}
