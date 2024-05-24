import React from "react";
import styles from "./header.module.css";
import globalStyles from "@/src/globalStyle.module.css";
import Nav from "../../nav/nav";
import HeaderLogo from "../../headerLogo/headerLogo";

const Header: React.FC = () => {
  return (
    <header className={[styles.header, globalStyles.styles].join(" ")}>
      <HeaderLogo />
      <Nav />
    </header>
  );
};

export default Header;
