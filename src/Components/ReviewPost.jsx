import { React, useState, useEffect } from "react";
import classCss2 from "../Components/FilmCard.module.css";
import StarRatingComponent from "react-star-rating-component";
import axios from "axios";
import { Form, Input, Button } from "reactstrap";

export default function ReviewPost(props) {
  const [photo, setPhoto] = useState(localStorage.getItem("images"));
  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("userName");
  const [rating, setRating] = useState(0);

  const ratingChanged = (newRating) => {
    setRating(newRating);
  };

  const handleCreateReview = async (e) => {
    e.preventDefault();
    const config = {
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    const sendDataReview = {
      movie_id: `${props.idFilm}`,
      comment: e.target.review.value,
      rating: rating,
    };

    axios
      .post(
        "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/review/create",
        sendDataReview,
        config
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    // localStorage.setItem("Status", "Name Updated");
    // alert("Review Posted");
    // window.location.reload();
  };
  console.log(rating);
  return (
    <div>
      <div className={classCss2.card_container}>
        {/* Input */}
        <div className="col-1">
          <div className="row">
            <img
              className={classCss2.avaReview}
              src={`${photo}`}
              height="70px"
              width="70px"
            ></img>
          </div>
        </div>
        <div className="col-9">
          <div className="row">
            <h5>
              <b>{fullName}</b>
            </h5>
          </div>
          <div className="row">
            <StarRatingComponent
              value={rating}
              count={5}
              onStarClick={ratingChanged}
              size={24}
              activeColor="#ffd700"
            />
          </div>
          <div className="row">
            <Form onSubmit={(e) => handleCreateReview(e)}>
              <Input
                type="textarea"
                name="review"
                placeholder="Leave a Review"
              ></Input>
              <br />
              <Button type="submit">Post</Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
