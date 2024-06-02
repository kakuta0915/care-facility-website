import React from "react";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import ResponsiveImage from "../components/responsiveImage/responsiveImage";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import useScrollAnimation from "../components/elements/animation/useScrollAnimation";
import useScrollAnimationStyles from "../components/elements/animation/useScrollAnimation.module.css";
import img8 from "@/src/images/image-8.jpg";

const About: React.FC = () => {
  useScrollAnimation([
    `.${useScrollAnimationStyles.fadeInUp}`,
    `.${useScrollAnimationStyles.fadeInRight}`,
    `.${useScrollAnimationStyles.fadeInLeft}`,
  ]);

  return (
    <div className={`${styles.aboutPage} ${globalStyles.styles}`}>
      <Header />
      <Hero imageSrc={img8} title="健進会について" />
      <Container>
        <section className={styles.philosophy}>
          <h3>~ 自立と尊厳の尊重 ~</h3>
          <p>
            健進会では、利用者様の自立と尊厳を尊重し、その権利を最大限に尊重します。自立と尊厳は、私たちのサービスの中心にあり、利用者様が自分自身の価値と尊厳を感じ、自らの生活をコントロールすることができるようサポートしています。
          </p>
          <p>
            自立と尊厳の尊重は、私たちの施設の核となる理念であり、私たちのすべての行動と決定の基盤です。私たちは、利用者様が安心して暮らせる環境を提供し、彼らが自分らしい生活を送ることができるよう支援します。
          </p>
        </section>
        <ResponsiveImage />
        <Contact className={useScrollAnimationStyles.fadeInUp} />
        <Advertisement className={useScrollAnimationStyles.fadeInUp} />
      </Container>
      <Footer />
    </div>
  );
};

export default About;
