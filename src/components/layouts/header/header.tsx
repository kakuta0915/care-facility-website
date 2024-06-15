import React from "react";
import HeaderLogo from "../../elements/headerLogo/headerLogo";
import Nav from "../../elements/nav/nav";
import styles from "./header.module.css";
import globalStyles from "@/src/globalStyle.module.css";

const Header: React.FC = () => {
  return (
    <header className={`${styles.header} ${globalStyles.styles}`}>
      <HeaderLogo />
      <Nav />
    </header>
  );
};

export default Header;
