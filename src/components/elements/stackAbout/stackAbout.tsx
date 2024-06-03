import React from "react";
import { Link } from "react-router-dom";
import styles from "./stackAbout.module.css";

interface StackAboutProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
}

const StackAbout: React.FC<StackAboutProps> = ({
  href,
  imageSrc,
  title,
  description,
}) => {
  return (
    <Link to={href} className={styles.stackAbout}>
      <img src={imageSrc} alt="" />
      <div className={styles.text}>
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </Link>
  );
};

export default StackAbout;
