import React, { useState, useRef, forwardRef } from "react";
import styles from "./faqContainer.module.css";
import globalStyles from "@/src/globalStyle.module.css";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.accordion}>
      <div className={styles.accordionHeader} onClick={toggleAccordion}>
        <div className={styles.flex}>
          <HelpOutlineIcon className={styles.iconQ} />
          <span>{question}</span>
        </div>
        <span className={styles.status}>{isOpen ? "CLOSE" : "OPEN"}</span>
      </div>
      <div
        className={`${styles.accordionContent} ${isOpen ? styles.open : ""}`}
      >
        <ChatBubbleOutlineIcon className={styles.iconA} />
        {answer}
      </div>
    </div>
  );
};

interface FAQSectionProps {
  title: string;
  faqs: FAQItemProps[];
}

const FAQSection = forwardRef<HTMLDivElement, FAQSectionProps>(
  ({ title, faqs }, ref) => (
    <div ref={ref} className={styles.qaContent}>
      <h4>{title}</h4>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  )
);

FAQSection.displayName = "FAQSection";

const FAQ: React.FC = () => {
  const sectionRefs = {
    入居について: useRef<HTMLDivElement>(null),
    費用について: useRef<HTMLDivElement>(null),
    入居後の暮らしについて: useRef<HTMLDivElement>(null),
    介護医療について: useRef<HTMLDivElement>(null),
  };

  const faqs = {
    入居について: [
      {
        question: "夫婦での入居は可能ですか？",
        answer:
          "はい、夫婦での入居が可能です。施設によって提供される部屋やスイートルームのタイプによって異なりますが、夫婦で一緒に暮らすことができる環境をご用意しています。夫婦での入居を希望される方は、お互いの健康状態や介護の必要性について詳細な相談を行った後、適切な部屋をご案内させていただきます。詳細については、施設の担当者にお問い合わせください。",
      },
      {
        question: "入居に必要な条件はありますか？",
        answer:
          "はい。一般的に、健康状態や介護の必要性など、入居資格の基準が設けられています。詳細は施設ごとに異なりますので、ご相談ください。入居されるご本人様が要介護認定で要介護3～要介護5であればご利用いただけます。",
      },
      {
        question: "お部屋は選べますか？",
        answer:
          "はい、お部屋の選択は可能です。施設によって異なりますが、一般的には複数のタイプやサイズのお部屋が用意されています。ご希望に合わせて、お部屋の配置や設備、眺望などを考慮してお選びいただけます。ただし、空き状況や希望する条件によっては、すべてのご希望に添えない場合もあります。お部屋の選択に関する詳細は、施設の担当者にお問い合わせください。",
      },
    ],
    費用について: [
      {
        question: "月額利用料の他に必要な費用はありますか？",
        answer:
          "入居時には入居時費用がかかる場合があります。これには、預託金や敷金、入居手続き費用などが含まれます。その他に、施設で提供される食事に関連する費用も別途発生する場合があります。例えば、特別な食事オプションを選択したり、外部での食事を希望したりする場合には、追加の費用がかかることがあります。",
      },
      {
        question: "介護保険は利用できますか",
        answer:
          "はい、介護保険の適用が可能な場合があります。介護保険の利用条件や適用サービスについては、施設の担当者にご相談ください。介護保険の適用によって負担が軽減される場合があります。",
      },
      {
        question: "支払い方法はどのようになっていますか？",
        answer:
          "支払い方法は施設によって異なりますが、一般的には銀行振り込みや口座自動引き落としなどが利用できる場合があります。詳細については施設の担当者にお問い合わせください。",
      },
    ],
    入居後の暮らしについて: [
      {
        question: "入居後はどのような生活が送れますか？",
        answer:
          "入居後は、安全で快適な生活を送ることができます。施設では食事や居住スペースの提供はもちろんのこと、医療・介護サービスやレクリエーション、さまざまなイベントなどを通じて、社会とのつながりや生活の質を向上させるサポートを行っています。",
      },
      {
        question: "食事はどのように提供されますか？",
        answer:
          "食事は、施設内の食堂やダイニングルームで提供されます。栄養バランスの取れた食事を提供すると同時に、特別な食事制限やアレルギーに対応したメニューもご用意しています。また、食事の時間やスタイルは施設によって異なりますので、ご希望やニーズに合わせて選択できます。",
      },
      {
        question:
          "必要な場合、医療や介護のサポートはどのように受けられますか？",
        answer:
          "施設では、専門の医療・介護スタッフが常駐しており、必要な場合には医療や介護のサポートを受けることができます。定期的な健康チェックや医師の診察、投薬管理、リハビリテーションなど、幅広いサービスが提供されています。",
      },
    ],
    介護医療について: [
      {
        question: "施設で提供される医療サービスはどのようなものですか？",
        answer:
          "施設では、定期的な健康診断や健康管理、病気や怪我の治療、慢性疾患の管理など、幅広い医療サービスを提供しています。また、医師や看護師が常駐しており、入居者の健康状態を管理し、必要に応じて適切な医療処置を行います。",
      },
      {
        question: "入居者の医療記録はどのように管理されていますか？",
        answer:
          "入居者の医療記録は、プライバシー保護の観点から厳重に管理されています。電子カルテや紙のカルテを用いて、入居者の健康状態や医療処置の履歴を記録し、医療スタッフが適切に管理・参照しています。入居者や家族の同意を得た場合にのみ、情報の提供や閲覧が行われます。",
      },
      {
        question: "緊急時の医療対応はどのように行われますか？",
        answer:
          "施設では、緊急時に迅速かつ適切な医療対応を行うための体制を整えています。医師や看護師が24時間体制で常駐しており、急病や怪我の発生時には即座に対応します。また、必要に応じて救急車や病院への搬送も行われます。",
      },
    ],
  };

  const handleButtonClick = (section: keyof typeof sectionRefs) => {
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${globalStyles.styles} ${styles.qaContainer}`}>
      <div className={styles.qaButtonContainer}>
        {Object.keys(faqs).map((section) => (
          <button
            key={section}
            className={styles.qaButton}
            onClick={() =>
              handleButtonClick(section as keyof typeof sectionRefs)
            }
          >
            {section}
          </button>
        ))}
      </div>
      {Object.keys(faqs).map((section) => (
        <FAQSection
          key={section}
          title={section}
          faqs={faqs[section as keyof typeof faqs]}
          ref={sectionRefs[section as keyof typeof sectionRefs]}
        />
      ))}
    </div>
  );
};

export default FAQ;
