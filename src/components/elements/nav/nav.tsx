import { useState } from "react";
import { Link } from "react-router-dom";
import HeaderContact from "../headerContact/headerContact";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Call from "@mui/icons-material/Call";
import globalStyles from "@/src/globalStyle.module.css";
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
      className={`${navIsOpen ? styles.open : styles.close}
      ${globalStyles.styles}
`}
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
              <Link to="/" onClick={closeNav}>
                <HomeIcon />
                ホーム
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={closeNav}>
                <InfoIcon />
                健進会について
              </Link>
            </li>
            <li>
              <Link to="/infomation" onClick={closeNav}>
                <ApartmentIcon />
                施設のご案内
              </Link>
            </li>
            <li>
              <Link to="/recruitment" onClick={closeNav}>
                <BusinessCenterIcon />
                採用情報
              </Link>
            </li>
            <li>
              <Link to="/inquiry" onClick={closeNav}>
                <Call />
                お問い合わせ
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
