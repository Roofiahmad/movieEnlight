import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Form, FormGroup, Label, Input, Button } from "reactstrap";
import classCss from "./AdminDashboard.module.css";
import axios from "axios";

export default class UpdateTrailer extends Component {
  state = {
    token: localStorage.getItem("token"),
    poster: null,
  };

  handleSubmit = (e) => {
    console.log(this.state.poster);
    e.preventDefault();
    let title = e.target.title.value;
    console.log(e.target.title.value);
    let header = {
      Authorization: "Bearer " + this.state.token,
    };
    let formData = new FormData();
    formData.append("poster",this.state.poster, this.state.poster.name);
    axios
      .put(`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/update/poster/${title}`,
        formData,
        {
          headers: header,
        }
      )
      .then((response) => {
        console.log(response);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  handleFile = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    this.setState({
      poster: file,
    });
  };

  render() {
    console.log(this.state.image)
    return (
      <Form
        className="form "
        onSubmit={(e) => {
          this.handleSubmit(e);
        }}
      >
        <Col>
          <FormGroup>
            <Label for="movieTitle">Movie Title</Label>
            <Input
              className={`w-75 ${classCss.center}`}
              type={"text"}
              name={"title"}
              id={"movieTitle"}
              placeholder={"input movie title here"}
            />
          </FormGroup>
          <FormGroup>
            <Label for="poster">Movie Poster</Label>
            <Input
              className={`w-50 ${classCss.center}`}
              type={"file"}
              name={"poster"}
              id={"moviePoster"}
              onChange={(e) => this.handleFile(e)}
            />
          </FormGroup>
        </Col>
        <Button>Update Trailer</Button>
      </Form>
    );
  }
}
