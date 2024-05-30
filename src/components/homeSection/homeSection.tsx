import React from "react";
import styles from "./homeSection.module.css";
import Button from "../elements/button/button";

interface HomeSectionProps {
  imgSrc: string;
  title: string;
  description: string;
  reverse?: boolean;
  className?: string;
}

const HomeSection: React.FC<HomeSectionProps> = ({
  imgSrc,
  title,
  description,
  reverse = false,
  className = "",
}) => {
  return (
    <section
      className={`${styles.homeSection} ${
        reverse ? styles.reverse : ""
      } ${className}`}
    >
      <img src={imgSrc} alt={title} className={styles.image} />
      <div className={styles.text}>
        <h2>{title}</h2>
        <p>{description}</p>
        <Button href="/" label="詳細" variant="secondary" />
      </div>
    </section>
  );
};

export default HomeSection;
