import React from "react";

export default function Card({ src, link = "", title = "", desc = "" }) {
  return (
    <div className="card">
      <picture className="card__img">
        <img src={src} alt={title} />
      </picture>
      <h3 className="card__title">{title}</h3>
      <p className="card__desc" dangerouslySetInnerHTML={{ __html: desc }} />
      <div className="card__action">
        <a
          className="btn btn--primary hero__cta"
          href={link}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
