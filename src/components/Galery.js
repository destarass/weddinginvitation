import React, { useEffect } from "react";
import "./Galery.css";
import Aos from "aos";
import "aos/dist/aos.css";

const Galery = () => {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="galery-container" id="galery">
      <div className="wrapper">
        <h1 data-aos="zoom-in-up">Our Gallery</h1>
        <div className="img-area">
          <div data-aos="fade-right" className="single-img">
            <img src="images/calon-3.jpg" alt="" className="image" />
          </div>
          <div data-aos="fade-left" className="single-img">
            <img src="images/calon--3.jpg" alt="" className="image" />
          </div>
          <div className="single-img">
            <img
              data-aos="fade-right"
              src="images/calon-1.jpg"
              alt=""
              className="image"
            />
          </div>
          <div className="single-img">
            <img
              data-aos="fade-right"
              src="images/calon--1.jpg"
              alt=""
              className="image"
            />
          </div>
          <div className="single-img">
            <img
              data-aos="fade-left"
              src="images/calon-2.jpg"
              alt=""
              className="image"
            />
          </div>
          <div className="single-img">
            <img
              data-aos="fade-left"
              src="images/calon--2.jpg"
              alt=""
              className="image"
            />
          </div>
        </div>
        <form
          className="FormButtonGalery"
          action="https://goo.gl/maps/gsEcsx9pwQe9tccw8"
        ></form>
      </div>
    </div>
  );
};

export default Galery;
