import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import FilmCard from "./FilmCard";

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
    {
      title: "Black Clover",
      category: "Anime",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Black_Clover%2C_volume_1.jpg/220px-Black_Clover%2C_volume_1.jpg",
    },
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
    {
      title: "Black Clover",
      category: "Anime",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Black_Clover%2C_volume_1.jpg/220px-Black_Clover%2C_volume_1.jpg",
    },
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
    {
      title: "Black Clover",
      category: "Anime",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Black_Clover%2C_volume_1.jpg/220px-Black_Clover%2C_volume_1.jpg",
    },
  ]);

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
