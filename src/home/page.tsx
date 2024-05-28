import React from "react";
import Header from "../components/layouts/header/header";
import Container from "../components/layouts/container/container";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";

function Home() {
  return (
    <div className={globalStyles.styles}>
      <Header />
      <Container>
        <Contact />
        <Advertisement />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
