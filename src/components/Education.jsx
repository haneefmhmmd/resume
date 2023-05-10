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
          "Specialization: Software Engineering Technology",
          "Course Duration: 2016 - 2020",
          "GPA (as of now): 4.3 / 4.5",
        ],
      },
      {
        title: "Bachelor Of Engineering",
        content: [
          "Specialization: Electrical And Electronics Engineering",
          "Course Duration: 2023 - 2024(Expected)",
          "CGPA: 7.9 / 10.0",
        ],
      },
    ],
  };
  return (
    <Section title={data.title} children={<Accordion data={data.list} />} />
  );
}
