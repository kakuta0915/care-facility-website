import React from "react";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import Stack from "../components/elements/stack/stack";
import Button from "../components/elements/button/button";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import img1 from "@/src/images/image-1.jpg";
import img2 from "@/src/images/image-2.jpg";
import img3 from "@/src/images/image-3.jpg";
import img4 from "@/src/images/image-4.jpg";

function Home() {
  return (
    <div className={`${styles.topPage} ${globalStyles.styles}`}>
      <Header />
      <Hero imageSrc={img1} title="尊厳と自立の尊重" />
      <Container>
        <section className={styles.newsSection}>
          <h3>お知らせ</h3>
          <div className={styles.newsBox}>
            <Stack
              href="/"
              imageSrc={img2}
              title="今月の食事メニューについて"
              description="5月の食事メニューをお知らせいたします。"
              date="2024年4月25日"
            />
            <Stack
              href="/"
              imageSrc={img3}
              title="入居説明会について"
              description="当施設では、入居をご検討されている方やご家族の方々向けに、入居説明会を開催いたします。"
              date="2024年4月16日"
            />
            <Stack
              href="/"
              imageSrc={img4}
              title="和食を楽しもう！"
              description="日本の伝統的な和食をテーマに、美味しい和食メニューを提供いたします。"
              date="2024年4月10日"
            />
          </div>
          <Button href="/" label="詳細" />
        </section>
        <Contact />
        <Advertisement />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
