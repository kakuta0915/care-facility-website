import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  href: string;
  label: string;
}

const Button: React.FC<ButtonProps> = ({ href, label }) => {
  return (
    <div className={styles.button}>
      <a href={href}>{label}</a>
    </div>
  );
};

export default Button;
