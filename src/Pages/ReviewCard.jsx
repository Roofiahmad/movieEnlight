import React from "react";
import classCss2 from "../Components/FilmCard.module.css";

export default function ReviewCard(props) {
  return props.dataReview.map((ripiu) => (
    <div className="output">
      <div>
        {/* Output */}
        <div className="col-1">
          <div className="row">
            <img
              className={classCss2.avaReview}
              src={
                `${ripiu.user.image}` ==
                "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/img/null"
                  ? (ripiu.user.image =
                      "https://cdn.iconscout.com/icon/free/png-512/avatar-370-456322.png")
                  : ripiu.user.image
              }
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
            <h6>{ripiu.comment}</h6>
          </div>
        </div>
      </div>
    </div>
  ));
}
