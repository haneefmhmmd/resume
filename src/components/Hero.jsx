import React, { useContext } from "react";
import { ContentContext } from "../context/Provider";

export default function Hero() {
  const { hero: data } = useContext(ContentContext);
  return (
    <section className="container hero">
      <h2>{data.headline}</h2>
      <h1>{data.name}</h1>
      <h3>{data.desc}</h3>
      <a className="btn btn--primary hero__cta" href={data.cta.href}>
        <span className="btn__label">{data.cta.text}</span>
      </a>
    </section>
  );
}
