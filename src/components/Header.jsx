import React, { useEffect, useRef, useState } from "react";
import { ReactComponent as CloseIcon } from "../assets/Close.svg";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Hamburger } from "../assets/Hamburger.svg";
import { ReactComponent as HeaderLogo } from "../assets/HeaderLogo.svg";
import { ReactComponent as Linkedin } from "../assets/Linkedin.svg";
export default function Header() {
  const headerContainer = useRef(null);

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
    const linkContainer = document.getElementById("main-header");
    linkContainer.classList.toggle("show");
  };
  const handleNavContainerClickListener = (e) => {
    const toggleBtn = document.getElementById("close-icon");
    const linkContainer = document.getElementById("main-header");
    if (!toggleBtn.contains(e.target)) {
      linkContainer.classList.toggle("show");
    }
  };

  return (
    <header
      className="header__container"
      ref={headerContainer}
      id="main-header"
    >
      <div className="container header">
        <a href="#" rel="noreferrer" className="header__logo">
          <HeaderLogo />
        </a>
        <button
          aria-label="Toggle Header"
          className="hamburger"
          onClick={toggleBtnClickHandler}
          id="toggle-btn"
        >
          <Hamburger />
        </button>
        <nav
          className="header__link-container"
          id="navlinks"
          onClick={handleNavContainerClickListener}
        >
          <a
            href="#skills"
            rel="noreferrer"
            className={`header__link ${activeNavLink === "skills" && "active"}`}
          >
            Skills
          </a>
          <a
            href="#experience"
            rel="noreferrer"
            className={`header__link ${
              activeNavLink === "experience" && "active"
            }`}
          >
            Experience
          </a>
          <a
            href="#education"
            rel="noreferrer"
            className={`header__link ${
              activeNavLink === "education" && "active"
            }`}
          >
            Education
          </a>
          <a
            href="#projects"
            rel="noreferrer"
            className={`header__link ${
              activeNavLink === "projects" && "active"
            }`}
          >
            Projects
          </a>
          <a
            href="#contact"
            rel="noreferrer"
            className={`header__link ${
              activeNavLink === "contact" && "active"
            }`}
          >
            Contact
          </a>
          <a
            aria-label="LinkedIn Profile"
            href="https://www.linkedin.com/in/haneefmhmmd/"
            target="_blank"
            rel="noreferrer noopener"
            className="icon header_social-icon"
          >
            <Linkedin />
          </a>
          <a
            aria-label="Github Profile"
            href="https://github.com/haneefmhmmd"
            target="_blank"
            rel="noreferrer noopener"
            className="icon header_social-icon"
          >
            <Github />
          </a>
          <button
            aria-label="Close Header"
            className="close-icon"
            id="close-icon"
            onClick={toggleBtnClickHandler}
          >
            <CloseIcon />
          </button>
        </nav>
      </div>
    </header>
  );
}
