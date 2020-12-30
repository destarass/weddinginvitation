import React, { useState } from "react";
import "./Ucapan.css";
import { db } from "../firebase";
import "aos/dist/aos.css";

const Ucapan = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contacts")
      .add({
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        setLoader(false);
        alert("Your message has been submitted 👍");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="Ucapan-Container" id="RSVP">
      <form className="form" onSubmit={handleSubmit}>
        <h1 data-aos="fade-right">RSVP</h1>
        <label data-aos="fade-right" htmlFor="" className="judulinput">
          Nama
        </label>
        <input
          data-aos="fade-right"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label data-aos="fade-right" htmlFor="" className="judulinput">
          Kebersediaan hadir
        </label>
        <input
          data-aos="fade-right"
          placeholder="Hadir / Tidak Bisa Hadir"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label data-aos="fade-right" htmlFor="" className="judulinput">
          {"Ucapan "}
        </label>
        <textarea
          data-aos="fade-right"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="posisibutton">
          <button className="glow-on-hover" data-aos="fade-right" type="submit">
            {"Submit "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Ucapan;
