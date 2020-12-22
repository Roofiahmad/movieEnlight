import { React, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import classCss2 from "../Components/FilmCard.module.css";

export default function Review() {
    const detailSelector = ["Overview", "Review"];

  return (
    <div className={classCss.category_container}>
      <div className={classCss.category_btn_container}>
        {detailSelector.map((data, index) => (
          <button
            className={classCss.category_btn}
            key={index}
            id={data}
            onClick={(event) => {
                console.log(event.target.id);
            }}
            >
            {data}
          </button>
        ))}
      </div>
      <div className={classCss2.card_container}>
        <img className={classCss2.avaReview} src="https://media-exp1.licdn.com/dms/image/C5603AQH19uFleJ5GTg/profile-displayphoto-shrink_200_200/0?e=1609977600&v=beta&t=hqRhlS_tiyGN7CpOemX347CRW9u7LOiqTkokSBh4CWE" height="70px" width="70px"></img><h5><b>Jody Mantap</b></h5>
      </div>
    </div>
  );
}
