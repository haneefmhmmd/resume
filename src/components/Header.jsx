import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CloseIcon } from "../assets/Close.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as Linkedin } from "../assets/Linkedin.svg";
export default function Header() {
  const navLinkContainer = useRef(null);

  const [activeNavLink, setActiveNavLink] = useState(null);

  function updateActiveNavLink() {
    const currentHash = window.location.hash.substring(1);
    setActiveNavLink(currentHash.toLocaleLowerCase());
  }
  useEffect(() => {
    updateActiveNavLink();
    window.addEventListener("hashchange", updateActiveNavLink);
  }, []);

  const toggleBtnClickHandler = (e) => {
    const linkContainer = document.getElementById("navlinks");
    linkContainer.classList.toggle("show");
  };

  return (
    <header className="header__container">
      <div className="container header">
        <a href="./" className="header__logo">
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
          {/* <a
            href="#about"
            className="header__link"
            onClick={navLinkClickHandler}
          >
            About
          </a> */}
          <a
            href="#skills"
            className={`header__link ${activeNavLink === "skills" && "active"}`}
          >
            Skills
          </a>
          <a
            href="#experience"
            className={`header__link ${
              activeNavLink === "experience" && "active"
            }`}
          >
            Experience
          </a>
          <a
            href="#education"
            className={`header__link ${
              activeNavLink === "education" && "active"
            }`}
          >
            Education
          </a>
          <a
            href="#projects"
            className={`header__link ${
              activeNavLink === "projects" && "active"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            className={`header__link ${
              activeNavLink === "contact" && "active"
            }`}
          >
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/haneefmhmmd/"
            target="_blank"
            rel="noreferrer noopener"
            className="icon header_social-icon"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/haneefmhmmd"
            target="_blank"
            rel="noreferrer noopener"
            className="icon header_social-icon"
          >
            <Github />
          </a>
          <button className="close-icon" onClick={toggleBtnClickHandler}>
            <CloseIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}
