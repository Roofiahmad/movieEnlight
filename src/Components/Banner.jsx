import React from "react";
import StarRatingComponent from "react-star-rating-component";
import classCss from "./Banner.module.css";
export default function Banner() {
  return (
    <div className={classCss.banner_container}>
      <div className={classCss.content_banner_container}>
        <p className={classCss.banner_title}>saint seiya</p>
        <div className={classCss.rate_reviews}>
          <StarRatingComponent value={4} emptyStarColor={"#fff"} />
          <span>2200 reviews</span>
        </div>
        <p className={classCss.banner_description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
          cumque doloribus, sed ratione, blanditiis fugiat commodi illo
          inventore eius quae perferendis vel doloremque amet odio animi minus
          architecto corrupti fuga!
        </p>
        <button className={classCss.banner_btn}>Watch Trailer</button>
        <button className={classCss.banner_btn}>Add to Watchlist</button>
      </div>
    </div>
  );
}
