import React from "react";
import Accordion from "./Accordion";
import Section from "./Section";
export default function Skills() {
  const data = {
    title: "Education",
    list: [
      {
        title: "Advanced PG Diploma",
        content: [
          {
            heading: "Specialization",
            content: "Software Engineering Technology",
          },
          {
            heading: "Course Duration",
            content: "2016 - 2020",
          },
          {
            heading: "GPA (as of now)",
            content: "4.3 / 4.5",
          },
        ],
      },
      {
        title: "Bachelor Of Engineering",
        content: [
          {
            heading: "Specialization",
            content: "Electrical And Electronics Engineering",
          },
          {
            heading: "Course Duration",
            content: "2023 - 2024(Expected)",
          },
          {
            heading: "GPA (as of now)",
            content: "7.9 / 10.0",
          },
        ],
      },
    ],
  };
  return (
    <Section
      title={data.title}
      children={<Accordion data={data.list} />}
      id="education"
    />
  );
}
