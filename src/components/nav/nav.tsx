import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ApartmentIcon from "@mui/icons-material/Apartment";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Call from "@mui/icons-material/Call";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./nav.module.css";

const Nav: React.FC = () => {
  return (
    <nav className={[styles.nav, globalStyles.styles].join(" ")}>
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
  );
};

export default Nav;
