import React from "react";
import classCss from "./DetailButton.module.css";

export default function DetailButton() {
  const detailSelector = ["Overview", "Character", "Review"];
  return (
    <div className={classCss.detail_btn_container}>
      {detailSelector.map((data, index) => (
        <button
          className={classCss.detail_btn}
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
  );
}
