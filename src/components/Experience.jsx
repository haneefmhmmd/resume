import React, { useContext } from "react";
import { ContentContext } from "../context/Provider";
import Accordion from "./Accordion";
import Section from "./Section";
export default function Experience() {
  const { experience: data } = useContext(ContentContext);
  return (
    <Section
      id="experience"
      title={data.title}
      children={<Accordion data={data.list} />}
    />
  );
}
