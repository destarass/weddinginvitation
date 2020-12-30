import React, { useEffect } from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import { Link as LinkS } from "react-scroll";
import "../App.css";

import Aos from "aos";
import "aos/dist/aos.css";

function HeroSection() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  let audio = new Audio("music/instrumentalwedding.mp3");

  const start = () => {
    audio.play();
  };

  return (
    <div className="hero-container" id="home">
      <video
        src="/videos/video-2.mp4"
        autoPlay
        loop
        muted="false"
        playsinline
      />
      <h1 data-aos="zoom-in-up">{" Annisa & Faza"}</h1>
      <p data-aos="zoom-in-up">{"Minggu, 17 Januari 2021"}</p>
      <p data-aos="zoom-in-up" className="location">
        {"Gedung Pandansari Taman Wiladatika Cibubur"}
      </p>

      <button className="play-btn" onClick={start}>
        Play
      </button>

      <div data-aos="flip-right" className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSizr="btn--large"
        >
          <LinkS
            to="RSVP"
            smooth={true}
            duration={1500}
            spy={true}
            exact="true"
          >
            RSVP
          </LinkS>
        </Button>

        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSizr="btn--large"
        >
          <LinkS
            to="galery"
            smooth={true}
            duration={1500}
            spy={true}
            exact="true"
          >
            GALLERY
          </LinkS>
          <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
