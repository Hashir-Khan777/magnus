import React, { useState } from "react";
import "./css/index.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const next = () => {
    setActiveSlide(activeSlide + 1);

    let images = document.querySelectorAll(".slide_item");
    if (images[activeSlide]) {
      images[activeSlide].classList.add("active");
      images[activeSlide].classList.remove("active");
    }

    if (activeSlide + 1 === images.length) {
      setActiveSlide(0);
    }
  };

  const previous = () => {
    setActiveSlide(activeSlide - 1);

    let images = document.querySelectorAll(".slide_item");
    images[activeSlide].classList.add("active");

    if (activeSlide === 0) {
      setActiveSlide(images.length - 1);
    }
  };

  setTimeout(next, 10000);

  return (
    <div className="slider">
      <div className="slides">
        <div className={`slide_item ${activeSlide === 0 && "active"}`}>
          <img loading="lazy" src="/images/slider1.jpg" alt="banner" />
          <div className="image_overlay"></div>
          <div className="slide_caption">
            <div className="container">
              <h1>
                Making The Most <br /> Of The Digital Era
              </h1>
              <p>
                The digital era has brought about many changes in how we <br />
                communicate, access information, and do business.
              </p>
              <a href="#contactus">
                <button>get a quote</button>
              </a>
            </div>
          </div>
        </div>

        <div className={`slide_item ${activeSlide === 1 && "active"}`}>
          <img loading="lazy" src="/images/slider2.jpg" alt="banner" />
          <div className="image_overlay"></div>
          <div className="slide_caption">
            <div className="container">
              <h1>
                Making The World <br /> Talk About You
              </h1>
              <p>
                Engage with your audience on social media. Share updates about
                <br />
                your business, respond to comments and messages.
              </p>
              <a href="#contactus">
                <button>get a quote</button>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="slider_controlls">
        <button className="slider_previous_controll" onClick={previous}>
          <FaChevronLeft className="slider_icons" />
        </button>
        <button className="slider_next_controll" onClick={next}>
          <FaChevronRight className="slider_icons" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
