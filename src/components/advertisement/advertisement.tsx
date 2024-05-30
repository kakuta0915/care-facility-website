import React from "react";
import styles from "./advertisement.module.css";
import globalStyles from "@/src/globalStyle.module.css";
import img1 from "@/src/images/advertisement-1.png";
import img2 from "@/src/images/advertisement-2.png";
import img3 from "@/src/images/advertisement-3.png";
import img4 from "@/src/images/advertisement-4.png";
import img5 from "@/src/images/advertisement-5.png";
import img6 from "@/src/images/advertisement-6.png";

interface AdvertisementProps {
  className?: string;
}

const Advertisement: React.FC<AdvertisementProps> = ({ className = "" }) => {
  return (
    <div
      className={`${styles.advertisement} ${globalStyles.styles} ${className}`}
    >
      <a href="/">
        <img src={img1} alt="" />
      </a>
      <a href="/">
        <img src={img2} alt="" />
      </a>
      <a href="/">
        <img src={img3} alt="" />
      </a>
      <a href="/">
        <img src={img4} alt="" />
      </a>
      <a href="/">
        <img src={img5} alt="" />
      </a>
      <a href="/">
        <img src={img6} alt="" />
      </a>
    </div>
  );
};

export default Advertisement;
