import React, { useState, useEffect } from "react";

import { Link as LinkS } from "react-scroll";

import { Button } from "./Button";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <LinkS
            to="home"
            smooth={true}
            duration={1500}
            spy={true}
            exact="true"
            className="navbar-logo"
            onClick={closeMobileMenu}
            id="navlogo"
          >
            <h1 className="navLogo">A&F</h1>

            {/* <i className="fab fa-typo3" /> */}
          </LinkS>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <LinkS
                to="profil-pengantin"
                className="nav-links"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-10}
                onClick={closeMobileMenu}
              >
                Profil
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                to="storyus"
                className="nav-links"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-10}
                onClick={closeMobileMenu}
              >
                Doa
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                to="information"
                className="nav-links"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-10}
                onClick={closeMobileMenu}
              >
                Information
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                to="galery"
                className="nav-links"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-10}
                onClick={closeMobileMenu}
              >
                Gallery
              </LinkS>
            </li>

            <li className="nav-item">
              <LinkS
                to="sign-up"
                className="nav-links-mobile"
                smooth={true}
                duration={1500}
                spy={true}
                exact="true"
                offset={-10}
              >
                Download
              </LinkS>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
