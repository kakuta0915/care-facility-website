import { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Call from "@mui/icons-material/Call";
import globalStyles from "@/src/globalStyle.module.css";
import HeaderContact from "../headerContact/headerContact";
import styles from "./nav.module.css";

const Nav: React.FC = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <div
      className={[
        navIsOpen ? styles.open : styles.close,
        globalStyles.styles,
      ].join(" ")}
    >
      {navIsOpen && (
        <style>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span>MENU</span>
      </button>

      <div className={styles.navContents}>
        <HeaderContact />
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="/" onClick={closeNav}>
                <HomeIcon />
                ホーム
              </a>
            </li>
            <li>
              <a href="/" onClick={closeNav}>
                <InfoIcon />
                健進会について
              </a>
            </li>
            <li>
              <a href="/" onClick={closeNav}>
                <ApartmentIcon />
                施設のご案内
              </a>
            </li>
            <li>
              <a href="/" onClick={closeNav}>
                <BusinessCenterIcon />
                採用情報
              </a>
            </li>
            <li>
              <a href="/" onClick={closeNav}>
                <Call />
                お問い合わせ
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
