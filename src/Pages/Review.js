import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import classCss2 from "../Components/FilmCard.module.css";
import StarRatingComponent from "react-star-rating-component";
import { Form, Input } from "reactstrap";
import "./Review.css";
import { Link, useParams } from "react-router-dom";
import Banner from "../Components/Banner"
import axios from "axios";

export default function Review() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState("");
  const [image, setImage] = useState("https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png")

  
  let { id } = useParams();
  let title = localStorage.getItem("title_film");
  useEffect(() => {
    getReview()
    ratingChanged()
  },[]);

  const ratingChanged = (newRating) => {
    setRating(newRating);
    console.log("INI BINTANGGGGG", newRating);
  };
  function getReview() {
    axios.get(`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/review/show/movie/?movie_id=${id}&page=<page>&limit=<limit>`
      ).then( ( response ) => {
        console.log( response.data.post, "INI TUH REVIEW" );
        setReview(response.data.post);
      });
      const photo = localStorage.getItem("images");
      if (photo !== "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/img/null") {
        setImage(photo);
      }
  };
  
  console.log("INI TUH STATE REVIEW", review);
  console.log("TEST AMBIL RATING", rating);
  const token = localStorage.getItem("token");
  const fullName = localStorage.getItem("userName");

    // console.log("INI TUH STATE REVIEW", review);
  return (
    <div className="bg-black">
      <div className={classCss.category_container}>
              <div className={classCss.category_btn_container}>
                <Link to={`/filmdetails/${title}`}>
                  <button className={classCss.category_btn}>Overview</button>
                </Link>
                <button className={classCss.category_btn}>Review</button>
              </div>
              { token ? (
              <div className={classCss2.card_container}>
                {/* Input */}
                <div className="col-1">
                  <div className="row">
                    <img
                      className={classCss2.avaReview}
                      src={`${image}`}
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
                      count={5}
                      onStarClick={ratingChanged}
                      size={24}
                      activeColor="#ffd700"
                    />
                  </div>
                  <div className="row">
                    <Form>
                      <Input
                        type="textarea"
                        name="review"
                        placeholder="Leave a Review"
                      ></Input>
                    </Form>
                  </div>
                </div>
              </div>
              ) : null}

        {/* Output */}
        {
          review.length > 0 ? review.map(ripiu => {
            return(
              <div className="output">
                <div className={classCss2.card_container}>
                  {/* Output */}
                  <div className="col-1">
                    {/* Output Photo */}
                    <div className="row">
                      <img
                        className={classCss2.avaReview}
                        src={`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/img/${ripiu.user.image}`}
                        height="70px"
                        width="70px"
                      ></img>
                    </div>
                  </div>
                  <div className="col-9">
                    {/* Output Text*/}
                    <div className="row">
                      <h5>
                        <b>{ripiu.user.fullName}</b>
                      </h5>
                    </div>
                    <div className="row">
                    <h6>
                        {ripiu.comment}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              )
            })
          :null}
      </div>

      <div className="container text-center">
        <button className="load">
          <b>load more</b>
        </button>
      </div>
    </div>
  );
}
