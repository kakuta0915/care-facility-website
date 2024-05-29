import React from "react";
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
    <a href={href} className={styles.stack}>
      <img src={imageSrc} alt="" />
      <div className={styles.text}>
        <h4>{title}</h4>
        <p className={styles.description}>{description}</p>
        <p>{date}</p>
      </div>
    </a>
  );
};

export default Stack;
