import React from 'react';
import './Carousel.css';

function Carousels() {
  return (
    <div className="App">
      <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <ol className="carousel-indicators">
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"></li>
          <li data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://drive.google.com/uc?export=view&id=1OmANrOEX7Zl7vsnG2jLEENwJ4SL_SlaI" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://drive.google.com/uc?export=view&id=1OmANrOEX7Zl7vsnG2jLEENwJ4SL_SlaI" className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src="https://drive.google.com/uc?export=view&id=1OmANrOEX7Zl7vsnG2jLEENwJ4SL_SlaI" className="d-block w-100" alt="..."/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carousels;
