import React, { useContext } from "react";
import { ContentContext } from "../context/Provider";
import Card from "./Card";
import Section from "./Section";
export default function Projects() {
  const { projects: data } = useContext(ContentContext);
  return (
    <Section title="Projects" id="projects">
      <div className="projects-container">
        {data.map((project) => (
          <Card
            src={project.src}
            link={project.link}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </div>
    </Section>
  );
}
