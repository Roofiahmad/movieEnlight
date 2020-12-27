import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Button } from "reactstrap";
import classCss from "./AdminDashboard.module.css";
import AddMovie from "./AddMovie";
import UpdateMovie from "./UpdateMovie";
import UpdateTrailer from "./UpdateTrailer";
import UpdatePoster from "./UpdatePoster";
import DeleteMovie from "./Deletemovie";

export default function AdminDashboard() {
  const [newMovie, setNewMovie] = useState(false);
  const [updateMovie, setUpdateMovie] = useState(false);
  const [updateTrailer, setUpdateTrailer] = useState(false);
  const [updatePoster, setUpdatePoster] = useState(false);
  const [deleteMovie, setDeleteMovie] = useState(false);

  return (
    <Container className={classCss.admin_dashboard_container}>
      <h4>Admin Only</h4>
      <div className={classCss.admin_image_container}>
        <img
          className={classCss.admin_image}
          src="https://i.pinimg.com/originals/4d/db/99/4ddb99836d52fba00f321c7764d698a8.jpg"
          alt="user image"
        />
      </div>
      <Button
        className={classCss.submit_button}
        onClick={() => {
          setNewMovie(!newMovie);
          setUpdateMovie(false);
          setUpdateTrailer(false);
        }}
      >
        New Movie
      </Button>
      <Button
        className={classCss.submit_button}
        onClick={() => {
          setUpdateMovie(!updateMovie);
          setUpdateTrailer(false);
          setNewMovie(false);
        }}
      >
        Update Movie
      </Button>
      <Button
        className={classCss.submit_button}
        onClick={() => {
          setUpdateTrailer(!updateTrailer);
          setUpdateMovie(false);
          setNewMovie(false);
        }}
      >
        Update Trailer
      </Button>
      <Button
        className={classCss.submit_button}
        onClick={() => {
          setUpdatePoster(!updatePoster);
          setUpdateTrailer(false);
          setUpdateMovie(false);
          setNewMovie(false);
        }}
      >
        Update Poster
      </Button>
      <Button
        className={classCss.submit_button}
        onClick={() => setDeleteMovie(!deleteMovie)}
      >
        Delete Movie
      </Button>
      {newMovie ? <AddMovie /> : null}
      {updateMovie ? <UpdateMovie /> : null}
      {updateTrailer ? <UpdateTrailer /> : null}
      {updatePoster ? <UpdatePoster /> : null}
      {deleteMovie ? <DeleteMovie /> : null}
    </Container>
  );
}