import React from "react";
import logo from "@/src/images/site-logo.png";
import styles from "./header.module.css";
import globalStyles from "@/src/globalStyle.module.css";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Call from "@mui/icons-material/Call";

const Header: React.FC = () => {
  return (
    <header className={[styles.header, globalStyles.styles].join(" ")}>
      <div className={styles.headerUp}>
        <div className={styles.logo}>
          <img src={logo} alt="画像" />
          <div>
            <p>尊厳と自立の尊重</p>
            <h1>健進会</h1>
          </div>
        </div>

        {/* 資料請求・見学予約 */}
        <div className={styles.headerContact}>
          <a href="/" className={styles.button1}>
            資料請求
          </a>
          <a href="/" className={styles.button2}>
            見学予約
          </a>
          <p className={styles.tell}>0120-123-456</p>
          <p className={styles.time}>営業時間 10:00 ~ 18:00</p>
        </div>
      </div>

      {/* ナビ */}
      <nav className={styles.nav}>
        <ul>
          <li>
            <a href="/">
              <HomeIcon />
              ホーム
            </a>
          </li>
          <li>
            <a href="/">
              <InfoIcon />
              健進会について
            </a>
          </li>
          <li>
            <a href="/">
              <ApartmentIcon />
              施設のご案内
            </a>
          </li>
          <li>
            <a href="/">
              <BusinessCenterIcon />
              採用情報
            </a>
          </li>
          <li>
            <a href="/">
              <Call />
              お問い合わせ
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
