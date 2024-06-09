import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import StackInfo from "../components/elements/stackInfo/stackInfo";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/layouts/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import useScrollAnimation from "../components/elements/animation/useScrollAnimation";
import useScrollAnimationStyles from "../components/elements/animation/useScrollAnimation.module.css";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import img8 from "@/src/images/image-8.jpg";
import img11 from "@/src/images/image-11.jpg";
import img12 from "@/src/images/image-12.jpg";
import img13 from "@/src/images/image-13.jpg";
import img14 from "@/src/images/image-14.jpg";
import img15 from "@/src/images/image-15.jpg";
import img16 from "@/src/images/image-16.jpg";
import img17 from "@/src/images/image-17.jpg";
import img18 from "@/src/images/image-18.jpg";
import img19 from "@/src/images/image-19.jpg";
import img20 from "@/src/images/image-20.jpg";

const Infomation: React.FC = () => {
  useScrollAnimation([
    `.${useScrollAnimationStyles.fadeInUp}`,
    `.${useScrollAnimationStyles.fadeInRight}`,
    `.${useScrollAnimationStyles.fadeInLeft}`,
  ]);

  return (
    <div className={`${styles.infoPage} ${globalStyles.styles}`}>
      <Header />
      <Hero imageSrc={img11} title="施設のご案内" />
      <Container>
        <Link to="/infomation" className={styles.infoSection}>
          <img src={img8} alt="" />
          <div className={styles.infoSectionText}>
            <h4>健進会の利用をご検討の方へ</h4>
            <p>よくあるご質問</p>
            <ArrowCircleRightIcon className={styles.icon} />
          </div>
        </Link>
        <div
          className={`${styles.facilityContents} ${useScrollAnimationStyles.fadeInUp}`}
        >
          <h3>特別養護老人ホーム</h3>
          <div className={styles.facilityList}>
            <StackInfo href="/infomation" title="健進園" imageSrc={img12} />
            <StackInfo href="/infomation" title="第二健進園" imageSrc={img13} />
            <StackInfo href="/infomation" title="第三健進園" imageSrc={img14} />
          </div>
        </div>
        <div
          className={`${styles.facilityContents} ${useScrollAnimationStyles.fadeInUp}`}
        >
          <h3>養護老人ホーム・ケアハウス・軽費老人ホーム</h3>
          <div className={styles.facilityList}>
            <StackInfo href="/infomation" title="健進館" imageSrc={img15} />
            <StackInfo
              href="/infomation"
              title="健進会ケアハウス"
              imageSrc={img16}
            />
            <StackInfo
              href="/infomation"
              title="健進会経費老人ホーム"
              imageSrc={img17}
            />
          </div>
        </div>
        <div
          className={`${styles.facilityContents} ${useScrollAnimationStyles.fadeInUp}`}
        >
          <h3>高齢者保健医療総合センター</h3>
          <div className={styles.facilityList}>
            <StackInfo href="/infomation" title="健進会病院" imageSrc={img18} />
            <StackInfo
              href="/infomation"
              title="健進会第二病院"
              imageSrc={img19}
            />
            <StackInfo
              href="/infomation"
              title="健進会第三病院"
              imageSrc={img20}
            />
          </div>
        </div>
        <Contact className={useScrollAnimationStyles.fadeInUp} />
        <Advertisement className={useScrollAnimationStyles.fadeInUp} />
      </Container>
      <Footer />
    </div>
  );
};

export default Infomation;
