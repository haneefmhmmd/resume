import React from "react";

export default function Section({
  title,
  className = "",
  children,
  ...restprops
}) {
  return (
    <section className={`section container ${className}`.trim()} {...restprops}>
      <header className="section__header">
        <h2 className="section__title">{title}</h2>
      </header>
      {children}
    </section>
  );
}
