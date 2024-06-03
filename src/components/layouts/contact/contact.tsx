import React from "react";
import { Link } from "react-router-dom";
import styles from "./contact.module.css";
import globalStyles from "@/src/globalStyle.module.css";

interface ContactProps {
  className?: string;
}

const Contact: React.FC<ContactProps> = ({ className = "" }) => {
  return (
    <div className={`${styles.contact} ${globalStyles.styles} ${className}`}>
      <div className={styles.title}>
        <h2>Contact</h2>
        <p>お問い合わせ</p>
      </div>
      <div className={styles.contactBox}>
        <ul className={styles.link}>
          <li>
            <Link to="/" className={styles.button1}>
              資料請求
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.button2}>
              見学予約
            </Link>
          </li>
          <li>
            <Link to="/" className={styles.button3}>
              お問い合わせ
            </Link>
          </li>
        </ul>
        <p className={styles.tell}>電話番号 0120-123-456</p>
        <p className={styles.call}>受付時間 10:00 ~ 18:00</p>
      </div>
    </div>
  );
};

export default Contact;
