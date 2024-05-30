import React from "react";
import { Link } from "react-router-dom";
import styles from "./stack.module.css";

interface StackProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  date: string;
}

const Stack: React.FC<StackProps> = ({
  href,
  imageSrc,
  title,
  description,
  date,
}) => {
  return (
    <Link to={href} className={styles.stack}>
      <img src={imageSrc} alt="" />
      <div className={styles.text}>
        <h4>{title}</h4>
        <p className={styles.description}>{description}</p>
        <p>{date}</p>
      </div>
    </Link>
  );
};

export default Stack;
