import React from "react";
import bank1 from "./images/банк2.jpg";
import bank2 from "./images/банк2.jpg";
import bank3 from "./images/банк2.jpg";
import bank4 from "./images/банк2.jpg";
import "./slider.css";
import right from "../slider/images/right.png";
import left from "../slider/images/left.png";

const Slider = () => {
  return (
    <div>
      <div className="slider">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src={bank3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bank1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bank2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bank4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true">
              <img src={left} className='leftArrow' />
            </span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              <img src={right} className='rightArrow' />
            </span>
          </button>
        </div>
        {/* <div
          id="carouselExampleDark"
          class="carousel carousel-dark slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="1000">
              <img src={bank1} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bank2} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bank3} class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={bank4} class="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true">
              <img src={left} className="leftArrow" />
            </span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true">
              <img src={right} className="rightArrow" />
            </span>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Slider;
