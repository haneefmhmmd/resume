import { motion } from "framer-motion";
import React, { useContext } from "react";
import { ContentContext } from "../context/Provider";
import CursorBlinker from "./CursorBlinker";
import TypingText from "./TypingText";

export default function Hero() {
  const { hero: data } = useContext(ContentContext);

  const animatedhello = {};

  return (
    <section className="container hero" id="#">
      <h2>
        <motion.span
          role="img"
          aria-label="Waving hand"
          animate={{ rotateZ: -30, rotateZ: 30 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="animated-hello"
        >
          👋
        </motion.span>{" "}
        {data.headline}
      </h2>
      <motion.h1>
        <TypingText text={data.name} />
        <CursorBlinker />
      </motion.h1>

      <p>{data.desc}</p>
      <a className="btn btn--primary hero__cta" href={data.cta.href}>
        <span className="btn__label">{data.cta.text}</span>
      </a>
    </section>
  );
}
