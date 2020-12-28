import { React, useState } from "react";
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
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  let { id } = useParams();
  let title = localStorage.getItem("title_film");
  const response = axios.get(`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/review/show/movie/?movie_id=${id}&page=<page>&limit=<limit>`
    ).then( ( response ) => {
      console.log( response, "INI TUH REVIEW" );
    })
  return (
    <div className="bg-black">
      <div className={classCss.category_container}>
        <div className={classCss.category_btn_container}>
          <Link to={`/filmdetails/${title}`}>
            <button className={classCss.category_btn}>Overview</button>
          </Link>
          <button className={classCss.category_btn}>Review</button>
        </div>
        <div className={classCss2.card_container}>
          {/* Input */}
          <div className="col-1">
            <div className="row">
              <img
                className={classCss2.avaReview}
                src="https://media-exp1.licdn.com/dms/image/C5603AQH19uFleJ5GTg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=hqRhlS_tiyGN7CpOemX347CRW9u7LOiqTkokSBh4CWE"
                height="70px"
                width="70px"
              ></img>
            </div>
          </div>
          <div className="col-9">
            <div className="row">
              <h5>
                <b>Jody Mantap</b>
              </h5>
            </div>
            <div className="row">
              <StarRatingComponent
                count={5}
                onChange={ratingChanged}
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

        <div className="output">
          <div className={classCss2.card_container}>
            {/* Output */}
            <div className="col-1">
              {/* Output Photo */}
              <div className="row">
                <img
                  className={classCss2.avaReview}
                  src="https://media-exp1.licdn.com/dms/image/C5603AQH19uFleJ5GTg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=hqRhlS_tiyGN7CpOemX347CRW9u7LOiqTkokSBh4CWE"
                  height="70px"
                  width="70px"
                ></img>
              </div>
            </div>
            <div className="col-9">
              {/* Output Text*/}
              <div className="row">
                <h5>
                  <b>Jody Mantap</b>
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="output">
          <div className={classCss2.card_container}>
            {/* Output */}
            <div className="col-1">
              {/* Output Photo */}
              <div className="row">
                <img
                  className={classCss2.avaReview}
                  src="https://media-exp1.licdn.com/dms/image/C5603AQH_OfdTwd_W6g/profile-displayphoto-shrink_800_800/0/1607424161138?e=1614211200&v=beta&t=f_trYZX92c0F8eeo1SUcLQqKiuJ-CpU38-Z9wkUX6UU"
                  height="70px"
                  width="70px"
                ></img>
              </div>
            </div>
            <div className="col-9">
              {/* Output Text*/}
              <div className="row">
                <h5>
                  <b>Roofi Ahmad Sidiq</b>
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className="output">
          <div className={classCss2.card_container}>
            {/* Output */}
            <div className="col-1">
              {/* Output Photo */}
              <div className="row">
                <img
                  className={classCss2.avaReview}
                  src="https://media-exp1.licdn.com/dms/image/C5603AQGXqgYdXzYAvg/profile-displayphoto-shrink_800_800/0/1607577128914?e=1614211200&v=beta&t=BlKCxvPBNSbThXIhqRgbAbqnGc4aQzMUpTP4zWbwk04"
                  height="70px"
                  width="70px"
                ></img>
              </div>
            </div>
            <div className="col-9">
              {/* Output Text*/}
              <div className="row">
                <h5>
                  <b>Afif Firdaus</b>
                </h5>
                <h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container text-center">
        <button className="load">
          <b>load more</b>
        </button>
      </div>
    </div>
  );
}
