import React from "react";
import { ReactComponent as Github } from "../assets/Github.svg";
import { ReactComponent as Linkedin } from "../assets/Linkedin.svg";
import ContactForm from "./ContactForm";
import Section from "./Section";
export default function Contact() {
  return (
    <Section title="Contact" className="contact">
      <div className="social-links">
        <a
          href="https://www.linkedin.com/in/haneefmhmmd/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Linkedin />
        </a>
        <a
          href="https://github.com/haneefmhmmd"
          target="_blank"
          rel="noreferrer noopener"
        >
          <Github />
        </a>
      </div>
      <ContactForm />
    </Section>
  );
}
