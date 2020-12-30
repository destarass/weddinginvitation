import React, { useEffect, useRef, useState } from "react";
import "./Countdown.css";

import { Button } from "./Button";

import Aos from "aos";
import "aos/dist/aos.css";

const Countdown = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");

  let interval = useRef();
  const startTimer = () => {
    const countdownDate = new Date("January 17, 2021 00:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="body" id="count-down">
      <h1 data-aos="flip-right" className="H1Countdown">
        Menuju Hari Bahagia
      </h1>
      <div data-aos="fade-right" className="iconCount">
        <p className="Pdoa">
          “Dan diantara tanda-tanda kekuasaan-Nya ialah diciptakan Nya untukmu
          pasangan hidup dari jenismu sendiri supaya kamu mendapat ketenangan
          hati dan dijadikan-Nya kasih sayang diantara kamu. Sesungguhnya yang
          demikian menjadi tanda-tanda kebesaran-Nya bagi orang-orang yang
          berfikir. "
        </p>
        <p className="Pdoa">(Ar-Rum: 21)</p>
        {/* <span className="Icon-Calender">
          <GiSandsOfTime />
        </span> */}
      </div>

      <div className="cardsContainer">
        <div data-aos="fade-up" className="cardcount card1">
          <div className="ContainerCount"></div>
          <div className="details">
            <h3 className="h3Details">{timerDays}</h3>
            <p className="PCount">Hari</p>
          </div>
        </div>
        <div data-aos="fade-up" className="cardcount card2">
          <div className="ContainerCount"></div>
          <div className="details">
            <h3 className="h3Details">{timerHours}</h3>
            <p className="PCount">Jam</p>
          </div>
        </div>
        <div data-aos="fade-up" className="cardcount card3">
          <div className="ContainerCount"></div>
          <div className="details">
            <h3 className="h3Details">{timerMinutes}</h3>
            <p className="PCount">Menit</p>
          </div>
        </div>

        <div data-aos="fade-up" className="cardcount card2">
          <div className="ContainerCount"></div>
          <div className="details">
            <h3 className="h3Details">{timerSeconds}</h3>
            <p className="PCount">Detik</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
