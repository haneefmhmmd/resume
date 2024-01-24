import { useContext } from "react";
import { v4 as uuid } from "uuid";
import { ReactComponent as Angular } from "../assets/Angular.svg";
import { ReactComponent as CSharp } from "../assets/Csharp.svg";
import { ReactComponent as CSS } from "../assets/Css.svg";
import { ReactComponent as Git } from "../assets/Git.svg";
import { ReactComponent as HTML } from "../assets/Html.svg";
import { ReactComponent as Java } from "../assets/Java.svg";
import { ReactComponent as JS } from "../assets/Js.svg";
import { ReactComponent as Next } from "../assets/NextJS.svg";
import { ReactComponent as React } from "../assets/React.svg";
import { ReactComponent as SpringBoot } from "../assets/SpringBoot.svg";
import { ContentContext } from "../context/Provider";
import Section from "./Section";

export default function Skills() {
  const { skills: data } = useContext(ContentContext);
  const iconMapper = {
    HTML: <HTML />,
    CSS: <CSS />,
    JavaScript: <JS />,
    Angular: <Angular />,
    "React.js": <React />,
    "Next.js": <Next />,
    Git: <Git />,
    Java: <Java />,
    "C#": <CSharp />,
    "Spring Boot": <SpringBoot />,
  };
  return (
    <Section title={data.title} id="skills">
      <ul className="skills-container">
        {data.list.map((skill) => (
          <li className="tag" key={uuid()}>
            {iconMapper[skill]}
            <span className="tag__text">{skill}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
