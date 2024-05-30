import React from "react";
import { Link } from "react-router-dom";
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
      <Link to={href} className={styles[variant]}>
        {label}
      </Link>
    </div>
  );
};

export default Button;
