import React from "react";

export default function Section({ title, className = "", children }) {
  return (
    <section className={`section container ${className}`.trim()}>
      <header className="section__header">
        <h2 className="section__title">{title}</h2>
      </header>
      {children}
    </section>
  );
}
