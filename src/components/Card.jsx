import React from "react";

export default function Card({ src, link = "", title = "", desc = "" }) {
  return (
    <a className="card" href={link} target="_blank">
      <picture className="card__img">
        <img src={src} alt={title} />
      </picture>
      <h3 className="card__title">{title}</h3>
      <p className="card__desc" dangerouslySetInnerHTML={{ __html: desc }} />
    </a>
  );
}
