import React from "react";
import styles from "./footer.module.css";
import globalStyles from "@/src/globalStyle.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} ${globalStyles.styles}`}>
      <h1>健進会</h1>
      <nav>
        <ul>
          <li>
            <a href="/">ホーム</a>
          </li>
          <li>
            <a href="/">健進会について</a>
          </li>
          <li>
            <a href="/">施設のご案内</a>
          </li>
          <li>
            <a href="/">採用情報</a>
          </li>
          <li>
            <a href="/">お問い合わせ</a>
          </li>
        </ul>
      </nav>
      <div className={styles.policy}>
        <a href="/">サイト利用について</a>
        <a href="/">個人情報保護ポリシー</a>
      </div>
      <p className={styles.copyright}>
        <small>Copyright &copy; 2024 Kenshinkai All Right Reserved.</small>
      </p>
    </footer>
  );
};

export default Footer;
