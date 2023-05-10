import React from 'react';

export default function Hero() {
  return (
    <section className='container hero'>
      <h2>Hey there! My name is</h2>
      <h1>Haneef Muhammad.</h1>
      <h3>
        I am a front-end developer experienced in creating performant websites and user-interfaces
        for webapp.
      </h3>
      <a className='btn btn--primary hero__cta' href='#contact'>
        <span className='btn__label'>Contact Me</span>
      </a>
    </section>
  );
}
