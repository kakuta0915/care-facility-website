import React from "react";
import styles from "./hero.module.css";

interface HeroProps {
  title: string;
  imageSrc: string;
}

const Hero: React.FC<HeroProps> = ({ title, imageSrc }) => {
  return (
    <section className={styles.hero}>
      <img src={imageSrc} alt="" />
      <h2 className={styles.pageTitle}>{title}</h2>
    </section>
  );
};

export default Hero;
