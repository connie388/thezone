import React, { useState } from "react";
import "../../styles/Slider.css";
import BtnSlider from "./BtnSlider.js";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setSlideIndex(index);
  };

  return (
    <div>
      <h1 className="standard-header">OUR FEATURE ROOMS</h1>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
            >
              {obj.title}/{obj.subTitle}
              <img
                alt="slide not found"
                src={process.env.PUBLIC_URL + `/slideshow/${obj.img}`}
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

        <div className="container-dots">
          {Array.from({ length: `${dataSlider.length}` }).map((item, index) => (
            <div
              key={index}
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? "dot active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
