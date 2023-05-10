import React, { useRef } from "react";
import { ReactComponent as CloseIcon } from "../assets/Close.svg";
import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
export default function Header() {
  const navLinkContainer = useRef(null);

  const navLinkClickHandler = (e) => {
    const links = [...navLinkContainer.current.children];
    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  };

  const toggleBtnClickHandler = (e) => {
    const linkContainer = document.getElementById("navlinks");
    linkContainer.classList.toggle("show");
  };

  return (
    <header className="header__container">
      <div className="container header">
        <a href="/" className="header__logo">
          H
        </a>
        <button className="hamburger" onClick={toggleBtnClickHandler}>
          <Hamburger />
        </button>
        <nav
          className="header__link-container"
          id="navlinks"
          ref={navLinkContainer}
        >
          <a
            href="#about"
            className="header__link"
            onClick={navLinkClickHandler}
          >
            About
          </a>
          <a
            href="#skills"
            className="header__link"
            onClick={navLinkClickHandler}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="header__link"
            onClick={navLinkClickHandler}
          >
            Experience
          </a>
          <a
            href="#education"
            className="header__link"
            onClick={navLinkClickHandler}
          >
            Education
          </a>
          <a
            href="#contact"
            className="header__link"
            onClick={navLinkClickHandler}
          >
            Contact
          </a>
          <button className="close-icon" onClick={toggleBtnClickHandler}>
            <CloseIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}
