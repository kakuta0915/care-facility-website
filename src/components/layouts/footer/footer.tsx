import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import globalStyles from "@/src/globalStyle.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} ${globalStyles.styles}`}>
      <h1>健進会</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/about">健進会について</Link>
          </li>
          <li>
            <Link to="/infomation">施設のご案内</Link>
          </li>
          <li>
            <Link to="/">採用情報</Link>
          </li>
          <li>
            <Link to="/">お問い合わせ</Link>
          </li>
        </ul>
      </nav>
      <div className={styles.policy}>
        <Link to="/">サイト利用について</Link>
        <Link to="/">個人情報保護ポリシー</Link>
      </div>
      <p className={styles.copyright}>
        <small>Copyright &copy; 2024 Kenshinkai All Right Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
