import React, { useEffect } from "react";
import "./Profilpengantin.css";
import Aos from "aos";
import "aos/dist/aos.css";

function Profilpengantin() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="ProfilContainer" id="profil-pengantin">
      <div className="bordertopH1">
        <h1 data-aos="fade-up" className="H1ProfilPengantin">
          {" Groom and Bride "}
        </h1>
      </div>
      <div className="row">
        <div className="column column1">
          <img
            data-aos="fade-up"
            className="profilcowo"
            src="images/baruprofil1.jpg"
            alt=""
          />
          <h2 data-aos="fade-left" className="H2profilcowo">
            Fila Faza Fauzan
          </h2>
          <p data-aos="fade-right" className="Pprofilcowo">
            Putra dari
          </p>
          <p data-aos="fade-right" className="Pprofilcowo">
            Bapak Mahmud Junaedi & Ibu Rosyyani
          </p>
        </div>
        <div className="column column2">
          <img
            data-aos="fade-up"
            className="profilcewe"
            src="images/baruprofil2.jpg"
            alt=""
          />
          <h2 data-aos="fade-left" className="H2profilcowo">
            Annisa Trihapsari
          </h2>
          <p data-aos="fade-right" className="Pprofilcowo">
            Putri dari
          </p>
          <p data-aos="fade-right" className="Pprofilcowo">
            Bapak Sudarsono & Ibu Hermiyati
          </p>
        </div>
      </div>
      <div data-aos="fade-up" className="BorderKata">
        <p className="UcapanKata">
          " Ketika dua hati menyatu, Allah-lah yang mempertemukannya. Tatkala
          janji terucap, Allah-lah menjadi saksinya. Maha suci Allah yang telah
          menjadikan segala sesuatunya indah dan sempurna. "
        </p>
      </div>
    </div>
  );
}

export default Profilpengantin;
