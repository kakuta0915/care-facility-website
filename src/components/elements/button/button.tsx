import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  href,
  label,
  variant = "primary",
}) => {
  return (
    <div className={styles.button}>
      <a href={href} className={styles[variant]}>
        {label}
      </a>
    </div>
  );
};

export default Button;
