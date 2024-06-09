import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import FAQ from "../components/elements/faqContainer/faqContainer";
import Contact from "../components/layouts/contact/contact";
import Advertisement from "../components/advertisement/advertisement";
import Footer from "../components/layouts/footer/footer";
import globalStyles from "@/src/globalStyle.module.css";
import styles from "./page.module.css";
import useScrollAnimation from "../components/elements/animation/useScrollAnimation";
import useScrollAnimationStyles from "../components/elements/animation/useScrollAnimation.module.css";
import img1 from "@/src/images/image-1.jpg";

const Inquiry: React.FC = () => {
  useScrollAnimation([
    `.${useScrollAnimationStyles.fadeInUp}`,
    `.${useScrollAnimationStyles.fadeInRight}`,
    `.${useScrollAnimationStyles.fadeInLeft}`,
  ]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [agreement, setAgreement] = useState(false);
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    agreement: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: name ? "" : "お名前を入力してください。",
      email: email ? "" : "メールアドレスを入力してください。",
      phone: phone ? "" : "電話番号を入力してください。",
      message: message ? "" : "お問い合わせ内容を入力してください。",
      agreement: agreement ? "" : "プライバシーポリシーに同意してください。",
    };

    setErrors(newErrors);

    if (!name || !email || !phone || !message || !agreement) {
      return;
    }

    console.log({
      name,
      email,
      phone,
      message,
      agreement,
    });
  };

  return (
    <div className={`${styles.inquiryPage} ${globalStyles.styles}`}>
      <Header />
      <Hero imageSrc={img1} title="お問い合わせ" />
      <Container>
        <p className={styles.explanation}>
          各種お問い合わせに関して、基本的に平日10時から18時までの間に、担当者より回答させていただいております。
          <br />
          FAX、メールでのお問い合わせの場合、またはお問い合わせ内容によりまして、回答にお時間をいただく場合がございますのであらかじめご了承ください。
        </p>

        <form
          onSubmit={handleSubmit}
          className={`${styles.form} ${useScrollAnimationStyles.fadeInUp} `}
        >
          <p className={styles.text}>入力項目</p>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="name">
              お名前: <span className={styles.required}>必須</span>
            </label>
            <div className={styles.inputContainer}>
              <input
                className={styles.formInput}
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className={styles.error}>{errors.name}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="email">
              メールアドレス: <span className={styles.required}>必須</span>
            </label>
            <div className={styles.inputContainer}>
              <input
                className={styles.formInput}
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className={styles.error}>{errors.email}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="phone">
              電話番号: <span className={styles.required}>必須</span>
            </label>
            <div className={styles.inputContainer}>
              <input
                className={styles.formInput}
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <p className={styles.error}>{errors.phone}</p>}
            </div>
          </div>
          <div className={styles.formGroup}>
            <label className={styles.formLabel} htmlFor="message">
              お問い合わせ内容: <span className={styles.required}>必須</span>
            </label>
            <div className={styles.inputContainer}>
              <textarea
                className={styles.formTextArea}
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              {errors.message && (
                <p className={styles.error}>{errors.message}</p>
              )}
            </div>
          </div>
          <div className={styles.formPolicyGroup}>
            <p className={styles.policy}>
              個人情報の取り扱いについては、下記の「プライバシーポリシー」をご確認いただき、ご同意いただけましたらチェックを入れてください。
            </p>
            <Link to="/inquiry" className={styles.link}>
              プライバイシーポリシー
            </Link>
            <label className={styles.checkBox}>
              <input
                type="checkbox"
                checked={agreement}
                onChange={(e) => setAgreement(e.target.checked)}
              />
              プライバシーポリシーに同意します
            </label>
            {errors.agreement && (
              <p className={styles.error}>{errors.agreement}</p>
            )}
          </div>
          <div className={styles.buttonContainer}>
            <button className={styles.formButton} type="submit">
              入力内容の確認
            </button>
          </div>
        </form>
        <section className={styles.qaSection}>
          <h3>
            Q&A <br />
            よくある質問
          </h3>
          <FAQ />
        </section>
        <Contact className={useScrollAnimationStyles.fadeInUp} />
        <Advertisement className={useScrollAnimationStyles.fadeInUp} />
      </Container>
      <Footer />
    </div>
  );
};

export default Inquiry;
