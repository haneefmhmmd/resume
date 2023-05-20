import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import AppContentContext from "./context/Provider";
import "./styles/index.scss";
const container = document.getElementById("root");

window.addEventListener("load", () => {
  window.isMobile = window.matchMedia("(max-width: 767px)").matches;
});

const root = createRoot(container);
root.render(
  <AppContentContext>
    <App />
  </AppContentContext>
);
