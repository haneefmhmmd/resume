import React from "react";

export default function Section({ title, children }) {
  return (
    <section className="section container">
      <header className="section__header">
        <h2 className="section__title">{title}</h2>
      </header>
      {children}
    </section>
  );
}
