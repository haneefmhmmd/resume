import React from "react";
import { v4 as uuid } from "uuid";
import Section from "./Section";
export default function Skills() {
  const data = [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Git",
    "Java",
    "C#",
  ];
  return (
    <Section title="Skills" id="skills">
      <ul className="skills-container">
        {data.map((skill) => (
          <li className="tag" key={uuid()}>
            <span className="tag__text">{skill}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
