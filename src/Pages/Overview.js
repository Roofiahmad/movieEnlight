import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classCss from "../Components/FilmCategory.module.css";
import classCss2 from "../Components/FilmCard.module.css";
import StarRatingComponent from "react-star-rating-component";
import { Form, Input } from "reactstrap";
import "./Overview.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Overview() {
  return (
    <div className="bg-black">
      <div className={classCss.category_container}>
      <div className={classCss.category_btn_container}>
            <button className={classCss.category_btn}>Overview</button>
          <Link to="/review">
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
  );
}


// const Overview = ({ match }) => {
//   // const [movieArray, setMovie] = useState("")
//   // useEffect(() => {
//   //   getData()
//   // },[]);
//   // function getData() {
//   //   axios.get( "https://cors-anywhere.herokuapp.com/" +
//   //     "http://ec2-13-229-61-46.ap-southeast-1.compute.amazonaws.com:6969/movie/?page=1&limit=30",
//   //     )
//   //     .then( ( response ) => {
//   //       console.log( response, "GET MOVIE DATA SUCCESS" );
//   //       let title = response.data.posts;
//   //       console.log(response.data.posts, "INI LIST ISI TITLE");
//   //       // setTitle(title);
//   //       localStorage.setItem("movie", "GET");
//   //       setMovie(response.data.posts);
//   //     });
//   // }

//   // console.log("GUYS INI STATENYAA", movieArray);
  
//   // return (
    
//   //   // <div className={classCss.card_container}>
//   //   //     {/* <div key={props.data.id} className={classCss.card}> */}
//   //   //     <h1>Synopsis :</h1>
//   //   //         {/* <p>{props.data.synopsis}</p> */}
//   //   //         <hr/>
//   //   //         <h1>Movie Info :</h1>
//   //   //         <p>Release Date: {match.params.title}</p>
//   //   //         {/* <p>Featured Song: {props.overviews.featuredSong}</p>
//   //   //         <p>Country: {props.overviews.country} </p>
//   //   //         <p>Creator: {props.overviews.creator} </p> */}
//   //   //         <hr />
//   //   //     {/* </div> */}
      
//   //   // </div>
//   // );
// };

// export default Overview;