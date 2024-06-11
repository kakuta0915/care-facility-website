import React from "react";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import StackItem from "../components/elements/stackItem/stackItem";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/layouts/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import useScrollAnimation from "../components/elements/animation/useScrollAnimation";
import useScrollAnimationStyles from "../components/elements/animation/useScrollAnimation.module.css";
import img7 from "@/src/images/image-7.jpg";
import img21 from "@/src/images/image-21.jpg";
import img22 from "@/src/images/image-22.jpg";
import img23 from "@/src/images/image-23.jpg";
import img24 from "@/src/images/image-24.jpg";
import img25 from "@/src/images/image-25.jpg";
import img26 from "@/src/images/image-26.jpg";

const Recruitment: React.FC = () => {
  useScrollAnimation([
    `.${useScrollAnimationStyles.fadeInUp}`,
    `.${useScrollAnimationStyles.fadeInRight}`,
    `.${useScrollAnimationStyles.fadeInLeft}`,
  ]);

  const useCustomColor = true;

  return (
    <div className={`${styles.topPage} ${globalStyles.styles}`}>
      <Header />
      <Hero imageSrc={img7} title="採用情報" />
      <section className={styles.messageSection}>
        <h3>~ MESSAGE ~</h3>
        <p>メッセージ</p>
        <p>
          健進会は、長い歴史の中で介護と医療の融合を通じて、地域の未来を築き上げてきました。急速な社会の変化の中で、私たちは一丸となって、自らの専門性を活かし、協力し合うことで、働く者も、ご利用者の皆様やご家族も、そして地域福祉全体が新たな可能性を模索しています。
        </p>
        <p>
          健進会では、未来に目を向けながら変化を受け入れ着実な歩みを進めています。私たちは、これからも時代の流れに合わせて変化し進化し続けることで、より良い未来を切り拓いていきます。
          私たちの想いや取り組みは、まだ語られていない未来へと続いています。私たちは、健進会とあなたの力を結集し、新たな未来を築くために努力し続けます。
        </p>
        <p>
          以下に、私たちの仕事や立場からのメッセージをご紹介します。ぜひ、じっくりとお読みいただき、私たちの想いを共有していただければ幸いです。
        </p>
      </section>
      <Container>
        <section
          className={`${useScrollAnimationStyles.fadeInUp} ${styles.interviewSection}`}
        >
          <h3>~ INTERVIEW ~</h3>
          <p>インタビュー</p>
          <div className={styles.interviewContents}>
            <StackItem
              href="/recruitment"
              imageSrc={img21}
              title="笑顔と思いやりの力"
              subTitle="介護士"
              name="田中 美樹"
              useCustomColor={useCustomColor}
            />
            <StackItem
              href="/recruitment"
              imageSrc={img22}
              title="介護と医療の融合に向けて"
              subTitle="看護師"
              name="山崎 香織"
              useCustomColor={useCustomColor}
            />
            <StackItem
              href="/recruitment"
              imageSrc={img23}
              title="生活の質を向上させる支援"
              subTitle="作業療法士"
              name="伊藤 舞"
              useCustomColor={useCustomColor}
            />
            <StackItem
              href="/recruitment"
              imageSrc={img24}
              title="安心と安全を提供する役割"
              subTitle="介護士"
              name="岡田 大樹"
              useCustomColor={useCustomColor}
            />
            <StackItem
              href="/recruitment"
              imageSrc={img25}
              title="退院後の生活を安全に"
              subTitle="看護師"
              name="山田 香菜"
              useCustomColor={useCustomColor}
            />
            <StackItem
              href="/recruitment"
              imageSrc={img26}
              title="入居後の生活を豊かに"
              subTitle="生活相談員"
              name="高村 祐二"
              useCustomColor={useCustomColor}
            />
          </div>
        </section>
        <section
          className={`${useScrollAnimationStyles.fadeInUp} ${styles.desiredTalent}`}
        >
          <h3>~ 健進会の求める人材 ~</h3>
          <p>
            当社では、多様な価値観や経験を持つ人材が集まり、共に成長し、最高のサービスを提供することを信念としています。私たちは、以下のような方々を求めています。
          </p>
          <ul>
            <li>積極的なコミュニケーションが得意な方</li>
            <li>情熱と責任感を持ち、使命感を持って取り組む方</li>
            <li>チームワークを大切にし、よりよいホームを作りたい方</li>
            <li>成長意欲が高く、向上心を持っている方</li>
            <li>ご入居者様やその家族と真摯に向き合える方</li>
          </ul>
          <p>
            上記の条件を満たす方々であれば、特別な資格や経験を持たなくても、当社で活躍できる環境が整っています。一緒に、ご入居者様とスタッフがお互いに幸せを感じるようなサービスを提供しましょう！
          </p>
        </section>
        <Contact className={useScrollAnimationStyles.fadeInUp} />
        <Advertisement className={useScrollAnimationStyles.fadeInUp} />
      </Container>
      <Footer />
    </div>
  );
};

export default Recruitment;
