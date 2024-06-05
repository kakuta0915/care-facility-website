import React from "react";
import { Link } from "react-router-dom";
import styles from "./stackInfo.module.css";

interface StackInfoProps {
  href: string;
  imageSrc: string;
  title: string;
}

const StackInfo: React.FC<StackInfoProps> = ({ href, imageSrc, title }) => {
  return (
    <Link to={href} className={styles.stackInfo}>
      <img src={imageSrc} alt="" />
      <h4>{title}</h4>
    </Link>
  );
};

export default StackInfo;
