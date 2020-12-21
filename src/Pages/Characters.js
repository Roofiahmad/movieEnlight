import React from "react";
import Banner from "../Components/Banner";
import DetailButton from "../Components/DetailButton";
import FilmCard from "../Components/FilmCard";
function Characters() {
  const image_size = { width: "200px", height: "200px", borderRadius: "10px" };
  const characterList = [
    {
      title: "Inuyasha",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Nanatsu",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Saint Seiya",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Slam Dunk",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Black Clover",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Inuyasha",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Nanatsu",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Saint Seiya",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Slam Dunk",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Black Clover",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Inuyasha",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Nanatsu",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Saint Seiya",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Slam Dunk",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
    {
      title: "Black Clover",
      category: null,
      imageUrl: "https://picsum.photos/200/300",
    },
  ];
  return (
    <div className="App">
      <Banner />
      <DetailButton />
      <FilmCard list={characterList} image_size={image_size} />
    </div>
  );
}

export default Characters;
