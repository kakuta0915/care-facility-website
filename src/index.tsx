import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./home/page";
import globalStyle from "./globalStyle.module.css";
import About from "./about/page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        {/* 他のルートもここに追加 */}
      </Routes>
    </Router>
  </React.StrictMode>
);
