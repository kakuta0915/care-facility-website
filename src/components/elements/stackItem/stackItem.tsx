import React from "react";
import { Link } from "react-router-dom";
import styles from "./stackItem.module.css";

interface StackItemProps {
  href: string;
  imageSrc: string;
  title: string;
  description: string;
  date?: string;
  useCustomColor?: boolean; // h4の色をカスタムカラーに変更するかどうか
  layout?: "row" | "column"; // レイアウトを指定するプロパティ
}

const StackItem: React.FC<StackItemProps> = ({
  href,
  imageSrc,
  title,
  description,
  date,
  useCustomColor = false,
  layout = "column", // デフォルトは縦並び
}) => {
  return (
    <Link to={href} className={`${styles.stackItem} ${styles[layout]}`}>
      <img src={imageSrc} alt="" />
      <div className={styles.text}>
        <h4 className={useCustomColor ? styles.customColor : ""}>{title}</h4>
        <p className={styles.description}>{description}</p>
        {date && <p>{date}</p>}
      </div>
    </Link>
  );
};

export default StackItem;
