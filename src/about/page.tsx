import React from "react";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import StackAbout from "../components/elements/stackAbout/stackAbout";
import ResponsiveImage from "../components/elements/responsiveImage/responsiveImage";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/layouts/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import useScrollAnimation from "../components/elements/animation/useScrollAnimation";
import useScrollAnimationStyles from "../components/elements/animation/useScrollAnimation.module.css";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import img5 from "@/src/images/image-5.jpg";
import img8 from "@/src/images/image-8.jpg";
import img9 from "@/src/images/image-9.jpg";
import img10 from "@/src/images/image-10.jpg";

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
        <section
          className={`${styles.philosophy} ${useScrollAnimationStyles.fadeInUp}`}
        >
          <h3>~ 自立と尊厳の尊重 ~</h3>
          <p>
            健進会では、利用者様の自立と尊厳を尊重し、その権利を最大限に尊重します。自立と尊厳は、私たちのサービスの中心にあり、利用者様が自分自身の価値と尊厳を感じ、自らの生活をコントロールすることができるようサポートしています。
          </p>
          <p>
            自立と尊厳の尊重は、私たちの施設の核となる理念であり、私たちのすべての行動と決定の基盤です。私たちは、利用者様が安心して暮らせる環境を提供し、彼らが自分らしい生活を送ることができるよう支援します。
          </p>
        </section>

        <section
          className={`${styles.aboutContents} ${useScrollAnimationStyles.fadeInUp}`}
        >
          <StackAbout
            href="/about"
            imageSrc={img9}
            title="ご挨拶"
            description="理事長のご挨拶と理念をご紹介いたします。"
          />
          <StackAbout
            href="/about"
            imageSrc={img5}
            title="法人概要"
            description="法人の概要についてご紹介いたします。"
          />
          <StackAbout
            href="/about"
            imageSrc={img10}
            title="交通アクセス"
            description="交通のご案内や、構内案内図などのアクセスをご紹介いたします。"
          />
        </section>
        <ResponsiveImage className={useScrollAnimationStyles.fadeInUp} />
        <Contact className={useScrollAnimationStyles.fadeInUp} />
        <Advertisement className={useScrollAnimationStyles.fadeInUp} />
      </Container>
      <Footer />
    </div>
  );
};

export default About;
