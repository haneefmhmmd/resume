import React from "react";
import Accordion from "./Accordion";
import Section from "./Section";
export default function Experience() {
  const data = {
    title: "Experience",
    list: [
      {
        title: "Junior Web Developer",
        content: [
          "- <b>Worked</b> in the revamp of 30+ web-pages for the branding website of the product called Setmore, following best practices to achieve high performance scores and ensuring the pages are mobile friendly and load fast",
          "- <b>Collaborated</b> with the design, content and marketing teams to ensure all developed web pages meet the requirements set-forth by the individual teams and are delivered within the deadline",
          "- <b>Developed</b> and maintained</b> the front-end code for 5 microservices that the product encompasses, ensuring the UI components developed are mobile friendly",
          "- <b>Inspected</b> the web app for UI issues along with the testing team and resolved issues identified quickly",
          "- <b>Accelerated</b> website migration to Next.js by developing internal tools to automate recurring tasks",
          "- <b>Mentored</b> 4 web development interns and conducted reviews and mock reviews for several interns",
          "- <b>Assisted</b> customers with their queries on the product as a support staff on a weekly basis",
          "- <b>Collaborated</b> with product owner/manager, designers, software developers and testers to deliver the sprint items within the given timeframe",
        ],
      },
      {
        title: "Web Development Intern",
        content: [
          "- <b>Learned</b> about web development technologies such as HTML, CSS, SCSS, JavaScript and build tools such as gulp, webpack and developed 5 email templates, 4 web pages and 3 web apps.",
          "- <b>Implemented</b> performance improvements techniques such as minification and compression of html, css and js files, optimizing images, identifying and reducing layout shifts, lazy loading less-priority and below the fold assets, preloading high priority assets on the developed sites",
          "- <b>Reference:</b> https://github.com/haneefmhmmd/Full-Creative",
          "- <b>Note</b> : Due to college examinations, I had to take a break from internship in the month of September. So my internship duration is in total 3 months.",
        ],
      },
    ],
  };
  return (
    <Section
      id="experience"
      title={data.title}
      children={<Accordion data={data.list} />}
    />
  );
}
