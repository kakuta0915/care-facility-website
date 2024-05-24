import React from "react";
import Header from "../components/layouts/header/header";
import styles from "./page.module.css";
import globalStyles from "@/src/globalStyle.module.css";
import Footer from "../components/layouts/footer/footer";

function Home() {
  return (
    <div className={globalStyles.styles}>
      <Header />
      <Footer />
    </div>
  );
}

export default Home;
