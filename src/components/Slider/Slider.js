import React, { useState } from "react";
import "./Slider.css";
import BtnSlider from "./BtnSlider";
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
    <div className="container portfolio">
      <div className="row align-items-center justify-content-center">
        <div className="col-xl-8 slide-holder">
          <div className="container-slider">
      <h1 className="white projects">PROJECTS</h1>

         
            {dataSlider.map((obj, index) => {
              return (
                <div
                  key={obj.id}
                  className={
                    slideIndex === index + 1 ? "slide active-anim" : "slide"
                  }
                >
                  <img
                    src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`}
                  />
                </div>
              );
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
              {Array.from({ length: 5 }).map((item, index) => (
                <div
                  onClick={() => moveDot(index + 1)}
                  className={slideIndex === index + 1 ? "dot active" : "dot"}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-xl-4 summary">
        <h1 className="project-title">{dataSlider[slideIndex - 1].title}</h1>
          <p className="project-text">{dataSlider[slideIndex - 1].subTitle}</p>
          <a
            target="_blank"
            rel="noreferrer"
            href={dataSlider[slideIndex - 1].url}
            className="flat-button"
          >
          VIEW
          </a>
        </div>
      </div>
    </div>
  );
}
