import React from "react";
import Card from "./Card";
import Section from "./Section";
export default function Projects() {
  const data = [
    {
      src: "https://raw.githubusercontent.com/haneefmhmmd/lab-report/master/project-images/report-dashboard.png",
      link: "https://github.com/haneefmhmmd/lab-report",
      title: "Lab Report",
      desc: "The Lab Report Generator is an application designed to simplify the process of creating laboratory reports for mid-tier pathology testing laboratories. These labs often rely on manual methods such as Word or Excel to create their reports, which can be time-consuming and prone to errors. This application provides an efficient and user-friendly way to generate professional-looking lab reports.",
    },
    {
      src: "https://raw.githubusercontent.com/haneefsyedanywhere/Text-Parser-Chrome-Ext/master/icons/icon-128.png",
      link: "https://github.com/haneefsyedanywhere/Text-Parser-Chrome-Ext",
      title: "Text-Parser-Chrome-Ext",
      desc: "This is a chrome extension which copies the selected text to clipboard. It contains the following features: On clicking/selecting a text, the content is copied, if any anchor tag is present in the copied line, those will be copied to your clipboard after the double quotes are converted to single quotes. On clicking any image, the corresponding details of the image such as src, alt, and prefixes in the mobile image url are copied. On clicking svg image, the svg code will be copied with double quotes converted to single quotes.",
    },
  ];
  return (
    <Section title="Projects">
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
