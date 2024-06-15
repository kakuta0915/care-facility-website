import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./home/page";
import About from "./about/page";
import Infomation from "./infomation/page";
import Inquiry from "./inquiry/page";
import Recruitment from "./recruitment/page";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/infomation" element={<Infomation />} />
        <Route path="/inquiry" element={<Inquiry />} />
        <Route path="/recruitment" element={<Recruitment />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
