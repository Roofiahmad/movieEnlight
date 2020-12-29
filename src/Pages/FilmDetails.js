import React from "react";
import FilmCategory from "../Components/FilmCategory";
import FooterComp from "../Components/FooterComp";
import PaginationComp from "../Components/PaginationComp";
import Carousels from "../Components/Carousel";
import classCss from "../Components/FilmCategory.module.css";
import Characters from "./Characters";
import Review from "./Review";
import Banner from "../Components/Banner";
import "../Components/All.css"
import Overview from "./Overview";
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import axios from "axios";

function FilmDetails() {
  let { title } = useParams();
  console.log("INI TUH TITLE", title);
  const response = axios.get(`http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/get/${title}`
    ).then( ( response ) => {
      console.log( "INI TUH RESPONSE", response )
      console.log("INI TUH FILM ID", response.data.data.movieId);
      localStorage.setItem("id_film", response.data.data.movieId);
      localStorage.setItem("title_film", response.data.data.title);
      // console.log( response.data.post )
      // localStorage.setItem("ID", response.data.post)
    })

    let id = localStorage.getItem("id_film");

  return (
  
        <div className="body">
        <Banner />
        <div className="bg-black">
          <div className={classCss.category_container}>
          <div className={classCss.category_btn_container}>
                <button className={classCss.category_btn}>Overview</button>
              <Link to={`/review/${id}`}>
              <button className={classCss.category_btn}>Review</button>
              </Link>
            </div>
          </div>
          <div className="container mt-4 mb-4"> 
            <div className="mb-5">
              <h2 className="decorated"><span>Synopsis</span></h2>
              <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium lobortis orci sed venenatis. Nam tempor ultrices consequat. Nulla ultrices non massa ut imperdiet. Proin a sodales orci, nec tincidunt libero. Aenean pellentesque, odio at pellentesque tincidunt, urna felis vulputate arcu, et blandit lacus risus id erat. Quisque sodales odio at sapien sagittis malesuada. Vivamus mollis suscipit risus, ut vulputate nisl dapibus vel. Curabitur ultricies facilisis elit, eget fringilla erat condimentum a. Nunc lacinia lorem nec magna ultrices consectetur. Nullam semper magna dapibus euismod egestas.<br /><br/>

              Aenean tristique pellentesque diam, nec fringilla libero convallis sed. Nam sagittis mi id semper consequat. Proin id ante vel nibh tincidunt varius. Aliquam placerat erat eu aliquet blandit. Curabitur sed eros sed erat efficitur aliquam vitae in sapien. Duis eu neque pretium, imperdiet risus et, blandit mi. Sed pulvinar fringilla maximus. Proin mauris felis, fermentum id placerat in, placerat ut purus. Nam lobortis finibus sem quis pulvinar. </p>
            </div>
            <div className="mt-5">
              <h2 class="decorated"><span>More Info</span></h2>
              <p className="mt-3"><strong>Release Date:</strong></p>
              <p><strong>Director:</strong></p>
              <p><strong>Featured Song:</strong></p>
              <p><strong>Budget:</strong></p>
            </div>
          </div>
        </div>
        <FooterComp />     
        </div>
   
  );
}

export default FilmDetails;
