import React from "react";
import HeaderLogo from "../../headerLogo/headerLogo";
import Nav from "../../nav/nav";
import styles from "./header.module.css";
import globalStyles from "@/src/globalStyle.module.css";

const Header: React.FC = () => {
  return (
    <header className={`${styles.headder} ${globalStyles.styles}`}>
      <HeaderLogo />
      <Nav />
    </header>
  );
};

export default Header;
