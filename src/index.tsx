import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home/page";
import globalStyle from "./globalStyle.module.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
