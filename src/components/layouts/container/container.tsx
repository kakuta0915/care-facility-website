import React from "react";
import styles from "./container.module.css";
import globalStyles from "@/src/globalStyle.module.css";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className={`${styles.container} ${globalStyles.styles}`}>
      {children}
    </div>
  );
};

export default Container;
