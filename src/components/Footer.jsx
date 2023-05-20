import React, { useContext } from "react";
import { ContentContext } from "../context/Provider";

export default function Footer() {
  const { footer: data } = useContext(ContentContext);
  return (
    <footer className="footer">
      <p className="footer__text">{data.desc}</p>
    </footer>
  );
}
