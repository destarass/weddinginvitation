import React from "react";
import "../../App.css";
import Cards from "../Cards";
import Services from "../Services";
import HeroSection from "../HeroSection";
import Galery from "../Galery";
import Storyus from "../Storyus";
import Profilpengantin from "../Profilpengantin";
import Countdown from "../Countdown";
import Ucapan from "../Ucapan";

function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <HeroSection />
      <Countdown />
      <Profilpengantin />
      <Storyus />
      <Services />
      <Galery />
      <Ucapan />
      <Cards />
    </div>
  );
}

export default Home;
