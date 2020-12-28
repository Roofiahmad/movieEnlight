import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import classCss from "./AdminDashboard.module.css";
import axios from "axios";

export default function AddMovie() {
  const token = localStorage.getItem("token");
  const formProperty = [
    {
      label: "filmTitle",
      classname: `w-75 ${classCss.center}`,
      type: "text",
      name: "title",
      id: "filmTitle",
      placeholder: "",
      text: "Movie Title",
    },
    {
      label: "synopsis",
      classname: `w-100 ${classCss.center}`,
      type: "textarea",
      name: "synopsis",
      id: "synopsis",
      placeholder: "input synopsis film here",
      text: "Synopsis",
    },
    {
      label: "filmGenre",
      classname: `w-100 ${classCss.center}`,
      type: "text",
      name: "genre",
      id: "filmGenre",
      placeholder: "input film genre here",
      text: "Genre",
    },
    {
      label: "director",
      classname: `w-100 ${classCss.center}`,
      type: "text",
      name: "director",
      id: "director",
      placeholder: "input film director here",
      text: "Director",
    },
    {
      label: "characters",
      classname: `w-100 ${classCss.center}`,
      type: "text",
      name: "characters",
      id: "characters",
      placeholder: "input film character here",
      text: "Characters",
    },
    {
      label: "releaseDate",
      classname: `w-100 ${classCss.center}`,
      type: "date",
      name: "release_date",
      id: "releaseDate",
      text: "Release Date",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const sendNewFilm = {
      title: e.target.title.value,
      synopsis: e.target.synopsis.value,
      genre: e.target.genre.value,
      director: e.target.director.value,
      characters: e.target.characters.value,
      release_date: e.target.release_date.value,
    };
    console.log(sendNewFilm);
    let header = {
      Authorization: "Bearer " + token,
    };

    axios
      .post(
        "https://cors-anywhere.herokuapp.com/" +
          "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/create",
        sendNewFilm,
        {
          headers: header,
        }
      )
      .then((response) => {
        console.log(response);
        alert("Movie added successfully");
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <Form
      className="form "
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <Col>
        {formProperty.map((data, index) => (
          <FormGroup key={index}>
            <Label for={data.label}>{data.text}</Label>
            <Input
              className={data.classname}
              type={data.type}
              name={data.name}
              id={data.id}
              placeholder={data.placeholder}
            />
          </FormGroup>
        ))}
      </Col>
      <Button>Create New Movie</Button>
    </Form>
  );
}
