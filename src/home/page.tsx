import React from "react";
import Header from "../components/layouts/header/header";
import styles from "./page.module.css";
import globalStyles from "@/src/globalStyle.module.css";

function Home() {
  return (
    <div className={globalStyles.styles}>
      <Header />
    </div>
  );
}

export default Home;
