import React from 'react';

export default function Section({ title, children }) {
  return (
    <section className='section container'>
      <header className='section__header'>
        <h1 className='section__title'>{title}</h1>
      </header>
      {children}
    </section>
  );
}
