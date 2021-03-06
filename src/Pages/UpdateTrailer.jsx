import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import classCss from "./AdminDashboard.module.css";
import axios from "axios";

export default function UpdateTrailer() {
  const token = localStorage.getItem("token");
  const formProperty = [
    {
      label: "movieTitle",
      classname: `w-75 ${classCss.center}`,
      type: "text",
      name: "title",
      id: "movieTitle",
      placeholder: "",
      text: "Movie Title",
    },

    {
      label: "trailer",
      classname: `w-100 ${classCss.center}`,
      type: "text",
      name: "trailer",
      id: "trailer",
      placeholder: "input url trailer here",
      text: "Movie Trailer",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    let title = e.target.title.value;

    const sendUpdateMovie = {
      trailer: e.target.trailer.value,
    };
    console.log(sendUpdateMovie);
    let header = {
      Authorization: "Bearer " + token,
    };

    axios
      .put(
        "https://cors-anywhere.herokuapp.com/" +
          `http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/update/trailer/${title}`,
        sendUpdateMovie,
        {
          headers: header,
        }
      )
      .then((response) => {
        console.log(response);
        alert("Trailer Updated Successfully");
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
      <Button>Update Trailer</Button>
    </Form>
  );
}
