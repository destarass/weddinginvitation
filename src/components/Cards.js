import React, { useEffect } from "react";
import "./Cards.css";
import Aos from "aos";
import "aos/dist/aos.css";
function Cards() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="cards" id="kumpulancard">
      <h1 data-aos="fade-up" className="H1Cards">
        Protokol Kesehatan
      </h1>
      <div data-aos="fade-up" className="ListProtokol">
        <h2 className="Intro">
          Acara ini diselenggarakan dengan protokol kesehatan yang harus
          dipatuhi demi mencegah penyebaran virus COVID-19.
        </h2>
        <h2 className="Intro">
          Tanpa mengurangi rasa hormat, para tamu undangan yang bersedia
          menghadiri acara dimohon kesediannya untuk:
        </h2>
        <ul class="a">
          <li>
            Menggunakan masker wajah dan/atau transparant face shield (bila
            memungkinkan).
          </li>
          <li>
            Membawa hand sanitizer (untuk meminimalisir antrian cuci tangan).
          </li>
          <li>
            Bersedia antre untuk pengecekan suhu tubuh sebelum memasuki venue
            pernikahan.
          </li>
          <li>
            Memberikan selamat dengan cara salam namaste kepada kedua mempelai
            juga orang tua mempelai.
          </li>
          <li>
            Menjaga jarak dengan pengantin dan tamu undangan lain selama acara
            berlangsung.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cards;
