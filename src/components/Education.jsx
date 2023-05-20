import React, { useContext } from "react";
import { ContentContext } from "../context/Provider";
import Accordion from "./Accordion";
import Section from "./Section";
export default function Skills() {
  const { education: data } = useContext(ContentContext);
  return (
    <Section
      title={data.title}
      children={<Accordion data={data.list} />}
      id="education"
    />
  );
}
