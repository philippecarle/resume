import React from "react";
import ReactDOM from "react-dom/client";
import "@fontsource/barlow";
import "./index.scss";
import "bootstrap";
import Resume from "./Resume";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Resume />
  </React.StrictMode>
);
