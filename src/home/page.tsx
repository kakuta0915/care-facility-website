import React from "react";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import Stack from "../components/elements/stack/stack";
import Button from "../components/elements/button/button";
import HomeSection from "../components/homeSection/homeSection";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import img1 from "@/src/images/image-1.jpg";
import img2 from "@/src/images/image-2.jpg";
import img3 from "@/src/images/image-3.jpg";
import img4 from "@/src/images/image-4.jpg";
import img5 from "@/src/images/image-5.jpg";
import img6 from "@/src/images/image-6.jpg";
import img7 from "@/src/images/image-7.jpg";

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
          <Button href="/" label="詳細" variant="primary" />
        </section>
        <HomeSection
          imgSrc={img5}
          title="健進会について"
          description="健進会では、皆様が安心して快適な生活を送るためのサポートを提供しています。私たちは、ご利用者様一人ひとりの個性やニーズを大切にし、家庭的な雰囲気の中で心温まるケアを提供しています。"
        />
        <HomeSection
          imgSrc={img6}
          title="施設のご案内"
          description="健進会は、高齢者や介護が必要な方々が快適な生活を送るための施設です。
              施設の特徴や概要、ご利用方法についてご紹介いたします。"
          reverse={true}
        />
        <HomeSection
          imgSrc={img7}
          title="採用情報"
          description="当施設では、介護のプロフェッショナルや人間性豊かなスタッフを積極的に募集しています。採用情報ページでは、現在募集中のポジションや応募方法についての詳細を提供しています。"
        />
        <Contact />
        <Advertisement />
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
