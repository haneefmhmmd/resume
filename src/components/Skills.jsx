import React, { useContext } from "react";
import { v4 as uuid } from "uuid";
import { ContentContext } from "../context/Provider";
import Section from "./Section";
export default function Skills() {
  const { skills: data } = useContext(ContentContext);
  return (
    <Section title={data.title} id="skills">
      <ul className="skills-container">
        {data.list.map((skill) => (
          <li className="tag" key={uuid()}>
            <span className="tag__text">{skill}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
