import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import FilmCard from "./FilmCard";
import axios from "axios";

export default function FilmCategory() {
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
  const [data, setData] = useState("");
  const [filmList, setFilmList] = useState([
    {
      title: "Inuyasha",
      category: "Anime",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/c/c3/InuYasha_The_Final_Act_DVD_volume_1_cover.jpg",
    },
    {
      title: "Nanatsu",
      category: "Anime",
      imageUrl:
        "https://i.pinimg.com/originals/8e/0e/65/8e0e652417ff7780c9027eed4f4eb0a5.jpg",
    },
    {
      title: "Saint Seiya",
      category: "Anime",
      imageUrl: "https://static.tvtropes.org/pmwiki/pub/images/main03_5.jpg",
    },
    {
      title: "Slam Dunk",
      category: "Anime",
      imageUrl:
        "https://i2.wp.com/halcyonrealms.com/blogpics/slamdunknew09.jpg?resize=500%2C780",
    },
  ]);
  useEffect(() => {
    axios
      .get(
        "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/?page=1&limit=30"
      )
      .then((response) => {
        console.log(response.data.posts, "GET MOVIE DATA SUCCESS");
        const newList = response.data.post;
        console.log(newList);
        setData({ ...data, data: newList });
        // let title = response.data.posts;
        // console.log(response.data.posts, "INI LIST ISI TITLE");
        // setTitle(title);
        // localStorage.setItem("movie", "GET");
        // setFilmList(response.data.posts);
      });
  }, []);

  console.log(data, "ini dari API");
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
      <FilmCard list={filmList} image_size={image_size} />
    </div>
  );
}
