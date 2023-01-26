import React, { useState } from "react";
import "../../styles/Slider.css";
import leftArrow from "../../assets/icons/angles-left-solid.svg";
import rightArrow from "../../assets/icons/angles-right-solid.svg";
import dataSlider from "./dataSlider";

export default function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const next = currentSlide + 1;
    if (next === dataSlider.length) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide(next);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== 0) {
      setCurrentSlide(currentSlide - 1);
    } else if (currentSlide === 0) {
      setCurrentSlide(dataSlider.length);
    }
  };

  const moveDot = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <div>
        <h1 className="standard-header">OUR FEATURE ROOMS</h1>
        <div className="container-slider">
          {dataSlider[currentSlide].title}/{dataSlider[currentSlide].subTitle}
          <div className="slide active-anim">
            <img
              src={require(`../../assets/slideshow/${dataSlider[currentSlide].img}`)}
              alt="Slide"
            />
          </div>
          <button onClick={prevSlide} className="btn-slide prev">
            <img src={rightArrow} alt="right arrow" />
          </button>
          <button onClick={nextSlide} className="btn-slide next">
            <img src={leftArrow} alt="left arrow" />
          </button>
          <div className="container-dots">
            {Array.from({ length: `${dataSlider.length}` }).map((_, index) => (
              <div
                key={index}
                onClick={() => moveDot(index)}
                className={currentSlide === index ? "dot active" : "dot"}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
