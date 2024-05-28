import React from "react";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import img1 from "@/src/images/image-1.jpg";

function Home() {
  return (
    <div className={`${styles.topPage} ${globalStyles.styles}`}>
      <Header />
      <Hero imageSrc={img1} title="尊厳と自立の尊重" />
      <Container>
        <Contact />
        <Advertisement />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
