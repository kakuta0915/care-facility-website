import React from "react";
import Header from "../components/layouts/header/header";
import Contact from "../components/layouts/contact/contact";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";

function Home() {
  return (
    <div className={globalStyles.styles}>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
