import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import FilmCard from "./FilmCard";
import axios from "axios";

export default function FilmCategory() {
  const [title, setTitle] = useState("title");
  const [movieArray, setMoview] = useState();
  
  // useEffect(() => {
  //   getData()
  // },[]);
  // function getData() {
  //   axios.get( "https://cors-anywhere.herokuapp.com/" +
  //     "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/?page=1&limit=30",
  //     )
  //     .then( ( response ) => {
  //       console.log( response, "GET MOVIE DATA SUCCESS" );
  //       let title = response.data.posts;
  //       console.log(response.data.posts, "INI LIST ISI TITLE");
  //       // setTitle(title);
  //       localStorage.setItem("movie", "GET");
  //       setMoview(response.data.posts);
  //     });
  // }
  // console.log("INI TITLEEE WOY", movieArray);
  //     // setTitle(titles);

  // let dataFilm = movieArray;
  // const status = localStorage.getItem("movie");
  // console.log(dataFilm);
    

  const image_size = { width: "200px", height: "300px", borderRadius: "10px" };
  const listCategory = [
    "All",
    "anime",
    "action",
    "adventure",
    "science fiction",
    "comedy",
  ];
  const [category, setCategory] = useState(listCategory);
  const [filmList, setFilmList] = useState([
    {
      genre: "Anime",
      id : "id",
      poster:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/InuYasha_The_Final_Act_DVD_volume_1_cover.jpg",
      title: "No Title",
      _id: "id",
    },
  ]);

  
  // useEffect(() => {
  //   getFilm()
  // },[]);
  // useEffect(() => {
  //   if( status ) {
  //     // const getFilm = () => {
        // setFilmList(dataFilm);
      // }
  //   }
  // });


  return (
    <div className={classCss.category_container}>
      <p className={classCss.category_text}>Browse by category</p>
      <div className={classCss.category_btn_container}>
        {category.map((data, index) => (
          <button
            className={classCss.category_btn}
            key={index}
            id={data}
            onClick={(event) => {
              console.log(event.target.id);
            }}
          >
            {data}
          </button>
        ))}
      </div>
      <FilmCard image_size={image_size} />
    </div>
  );
}
