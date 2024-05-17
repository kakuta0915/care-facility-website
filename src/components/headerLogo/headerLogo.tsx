import logo from "@/src/images/site-logo.png";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./headerLogo.module.css";

const HeaderLogo: React.FC = () => {
  return (
    <div className={[styles.headerLogo, globalStyles.styles].join(" ")}>
      <img src={logo} alt="画像" />
      <div>
        <p>尊厳と自立の尊重</p>
        <h1>健進会</h1>
      </div>
    </div>
  );
};

export default HeaderLogo;
