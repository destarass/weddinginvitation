import React, { useEffect } from "react";
import "./Services.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link as LinkS } from "react-scroll";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="ServicesContainer" id="information">
      <h1 data-aos="zoom-in-up" className="ServicesH1">
        {" Information "}
      </h1>
      <div className="ServicesWrapper">
        <div data-aos="fade-up" className="ServicesCard">
          <h1 className="H1judul">Date</h1>
          <img src="images/calendar.png" alt="" className="ServicesIcon" />
          <h2 className="ServicesH2">Minggu</h2>
          <h2 className="ServicesH2Card1">17 Januari 2021</h2>
        </div>
        <div data-aos="fade-up" className="ServicesCard">
          <h1 className="H1judul">Time</h1>
          <img src="images/clock.png" alt="" className="ServicesIcon" />
          <table className="table-sesi">
            <tr className="TRtimeA"> Sesi 2 : 11.30 - 13.00 </tr>
            <tr className="TRtime"> </tr>
          </table>
          {/* <p className="ServicesP">halohalohalo</p> */}
        </div>
        <div data-aos="fade-up" className="ServicesCard">
          <h1 className="H1judul">Place</h1>
          <img src="images/place.png" alt="" className="ServicesIcon" />
          <h2 className="ServicesH2Card3">
            {" Gedung Pandansari Taman Wiladatika Cibubur "}
          </h2>
          <form action="https://goo.gl/maps/gsEcsx9pwQe9tccw8">
            <button class="buttonCard">Click Me</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Services;
