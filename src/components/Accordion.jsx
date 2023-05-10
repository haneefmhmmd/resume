import React, { useRef } from "react";
import { v4 as uuid } from "uuid";
import { ReactComponent as Minus } from "../assets/Minus.svg";
import { ReactComponent as Plus } from "../assets/Plus.svg";

export default function Accordion({ data }) {
  const accordionContainer = useRef(null);
  const accordionOnClickHandler = (e) => {
    const accordions = [...accordionContainer.current.children];
    accordions.forEach((accordion) => {
      if (accordion !== e.currentTarget) {
        accordion.classList.remove("open");
      }
    });
    e.currentTarget.classList.toggle("open");
  };

  return (
    <div className="accordion-container" ref={accordionContainer}>
      {data.map((accordion) => (
        <article
          className="accordion"
          onClick={accordionOnClickHandler}
          key={uuid()}
        >
          <header className="accordion__header">
            <h3 className="accordion__title">{accordion.title}</h3>
            <button className="btn btn--primary btn--rounded accordion__open-icon">
              <Plus />
            </button>
            <button className="btn btn--primary btn--rounded accordion__close-icon">
              <Minus />
            </button>
          </header>
          <div className="accordion__body">
            {accordion.content.map((item) => (
              <p className="accordion_content" key={uuid()}>
                {item}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
