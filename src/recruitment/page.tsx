import React, { useRef } from "react";
import Header from "../components/layouts/header/header";
import Hero from "../components/layouts/hero/hero";
import Container from "../components/layouts/container/container";
import StackItem from "../components/elements/stackItem/stackItem";
import RecruitmentContents from "../components/elements/recruitmentContents/recruitmentContents";
import ButtonContainer from "../components/elements/buttonContainer/buttonContainer";
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

  const caregiverRef = useRef<HTMLDivElement>(null);
  const nurseRef = useRef<HTMLDivElement>(null);
  const careManagerRef = useRef<HTMLDivElement>(null);
  const counselorRef = useRef<HTMLDivElement>(null);
  const managementRef = useRef<HTMLDivElement>(null);
  const assistanceRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={`${styles.recruitmentPage} ${globalStyles.styles}`}>
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
        <section
          className={`${useScrollAnimationStyles.fadeInUp} ${styles.recruitmentSection}`}
        >
          <RecruitmentContents
            className={useScrollAnimationStyles.fadeInUp}
            title="~ 募集概要 (全職種共通) ~"
            contents={
              <table className={styles.overViewTable}>
                <tbody>
                  <tr>
                    <th>勤務地</th>
                    <td>
                      特別養護老人ホーム・養護老人ホーム・軽費老人ホーム・ケアハウス・高齢者保健医療センター
                    </td>
                  </tr>
                  <tr>
                    <th>休日・休暇</th>
                    <td>
                      <p>月8日~10日</p>
                      <ul>
                        <li>年次有給休暇制度</li>
                        <li>特別休暇制度（バースデー、慶弔、災害時など）</li>
                        <li>
                          産前産後休暇、育児・看護休暇、介護休暇など、各種休暇制度あり
                        </li>
                      </ul>
                    </td>
                  </tr>
                  <tr>
                    <th>賞与</th>
                    <td>
                      正社員・パート有り (6月・12月に支給、計3.5か月分
                      ※前年度実績)
                    </td>
                  </tr>
                  <tr>
                    <th>通勤手当</th>
                    <td>月額上限 4万円まで支給します</td>
                  </tr>
                  <tr>
                    <th>福利厚生</th>
                    <td>
                      <ul>
                        <li>
                          各種保険（雇用保険、健康保険、厚生年金保険、労災保険）
                        </li>
                        <li>
                          結婚・出産のお祝い、傷病・弔事・災害時のお見舞い支給
                        </li>
                        <li>
                          各種社員割引制度（ショッピング・映画・旅行など）
                        </li>
                        <li>インフルエンザ予防接種、健康診断</li>
                        <li>
                          退職金制度（対象: 正社員 ※在籍2年以上で支給します）
                        </li>
                        <li>職員食堂・売店・ATM有り</li>
                        <li>労働組合有り</li>
                        <li>資格取得支援制度</li>
                        <li>制服貸与</li>
                        <li>
                          住居手当 (正職員のみ支給 40歳以下: 10,000円、41歳以上:
                          9,000円)
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            }
          />

          <ButtonContainer
            scrollToSection={scrollToSection}
            caregiverRef={caregiverRef}
            nurseRef={nurseRef}
            careManagerRef={careManagerRef}
            counselorRef={counselorRef}
            managementRef={managementRef}
            assistanceRef={assistanceRef}
          />

          <div ref={caregiverRef}>
            <RecruitmentContents
              className={useScrollAnimationStyles.fadeInUp}
              title="~ 介護士 ~"
              contents={
                <table className={styles.careTable}>
                  <tbody>
                    <tr>
                      <th>仕事内容</th>
                      <td>
                        <p>
                          ご入居者さまへの介護サービスや生活サービスを提供するため、介護士の方には以下の業務を担当していただきます。
                        </p>
                        <p>
                          ご入居者さまの食事介助、入浴介助、排泄介助、就寝介助、病院への付き添い、話し相手など、身のまわりのお世話や体操、レクリエーションの企画・参加をしていただきます。
                        </p>
                        <p>
                          これらの業務を通じて、ご入居者さまの安心と快適な生活をサポートし、穏やかな日々を提供することを目指しています。
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>雇用形態</th>
                      <td>
                        <ul>
                          <li>正社員</li>
                          <li>時間旧社員</li>
                          <li>
                            パート
                            (通常のパートの他に短時間パートや夜勤専従パートがあります)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>応募資格</th>
                      <td>
                        ヘルパー2級・初任者研修修了の方（未経験可）、介護福祉士・社会福祉士・精神保健福祉士の方または、介護施設・病院等にて実務経験6ヵ月以上の方※定年60歳（再雇用制度あり）
                      </td>
                    </tr>
                    <tr>
                      <th>勤務時間</th>
                      <td>
                        <ul>
                          <li>平常勤務 9:00 ~ 18:00</li>
                          <li>早出勤務 7:00 ~ 16:00</li>
                          <li>遅出勤務 10:00 ~ 19:00</li>
                          <li>夜間勤務A 16:30 ~ 翌9:30</li>
                          <li>夜間勤務B 21:30 ~ 翌7:30</li>
                        </ul>
                        ※ 施設によって変動あり
                      </td>
                    </tr>
                    <tr>
                      <th>給与</th>
                      <td>
                        <ul>
                          <li>
                            <div>
                              <p>基本給 + 調整手当</p>
                              <ul>
                                <li>介護福祉士・社会福祉士</li>
                                <li>
                                  <span>高校 新卒 180,000円</span>
                                </li>
                                <li>
                                  <span>大学 新卒 200,000円</span>
                                </li>
                                <li>初任者研修・実務者研修終了等・資格なし</li>
                                <li>
                                  <span>高校 新卒 160,000円</span>
                                </li>
                                <li>
                                  <span>大学 新卒 170,000円</span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>夜勤手当 (1夜勤)</p>
                              <ul>
                                <li>
                                  <span>16:30 ~ 翌9:30 10,000円</span>
                                </li>
                                <li>
                                  <span>21:30 ~ 翌7:30 6,000円</span>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li>
                            <div>
                              <p>その他手当</p>
                              <ul>
                                <li>
                                  <span>介護職員処遇改善加算手当 6,000円</span>
                                </li>
                                <li>
                                  <span>
                                    介護職員特定処遇改善加算手当 10,000 ～
                                    25,000円
                                  </span>
                                </li>
                                <li>
                                  <span>介護職員処遇改善支援手当 8,000円</span>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              }
            />
          </div>

          <ButtonContainer
            scrollToSection={scrollToSection}
            caregiverRef={caregiverRef}
            nurseRef={nurseRef}
            careManagerRef={careManagerRef}
            counselorRef={counselorRef}
            managementRef={managementRef}
            assistanceRef={assistanceRef}
          />

          <div ref={nurseRef}>
            <RecruitmentContents
              className={useScrollAnimationStyles.fadeInUp}
              title="~ 看護師 ~"
              contents={
                <table className={styles.nurseTable}>
                  <tbody>
                    <tr>
                      <th>仕事内容</th>
                      <td>
                        <p>
                          ご入居者さまの健康管理と安全な生活環境の提供を目指し、経験豊富な看護師を募集しています。
                        </p>
                        <p>
                          主な業務内容は、バイタルサインの測定・健康状態の観察と記録・処方薬の管理・医療処置の実施です。また、ご入居者さまやその家族とのコミュニケーションを通じた健康アドバイスや、緊急時の迅速な対応もお願いします。
                        </p>
                        <p>
                          チームと協力し、総合的なケアプランを実施することで、安心で快適な生活をサポートします。
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>雇用形態</th>
                      <td>
                        <ul>
                          <li>正社員</li>
                          <li>時間旧社員</li>
                          <li>
                            パート
                            (通常のパートの他に短時間パートや夜勤専従パートがあります)
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>応募資格</th>
                      <td>
                        <p>
                          正看護師・准看護師のいずれかをお持ちの方
                          <br />
                          ※経験年数・ブランクは問いません。
                        </p>
                        <ul>
                          <li>
                            正社員
                            <p>日勤帯フルタイム勤務</p>
                          </li>
                          <li>
                            時間給社員
                            <p>日勤帯フルタイム勤務が可能な方</p>
                          </li>
                          <li>
                            パート
                            <p>勤務時間・勤務日数問わず</p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>勤務時間</th>
                      <td>
                        <ul>
                          <li>平常勤務 9:00 ~ 18:00</li>
                          <li>夜間勤務A 16:30 ~ 翌9:30</li>
                        </ul>
                        <p>※ 施設によって変動あり</p>
                      </td>
                    </tr>
                    <tr>
                      <th>給与</th>
                      <td>
                        <ul>
                          <li>
                            基本給 + 調整手当 (経験・年数により優遇いたします)
                            <p>看護師</p>
                            <span>3年過程 新卒 200,000円</span>
                            <span>大学 新卒 210,000円</span>
                          </li>
                          <li>
                            夜勤手当 (2交代制 ・1夜勤)
                            <p>16:30 ~ 翌9:30 15,000円</p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              }
            />
          </div>

          <ButtonContainer
            scrollToSection={scrollToSection}
            caregiverRef={caregiverRef}
            nurseRef={nurseRef}
            careManagerRef={careManagerRef}
            counselorRef={counselorRef}
            managementRef={managementRef}
            assistanceRef={assistanceRef}
          />

          <div ref={careManagerRef}>
            <RecruitmentContents
              className={useScrollAnimationStyles.fadeInUp}
              title="~ ケアマネージャー ~"
              contents={
                <table className={styles.careManagerTable}>
                  <tbody>
                    <tr>
                      <th>仕事内容</th>
                      <td>
                        <p>
                          健進会が運営している施設で過ごされているご入居者様の健康状態や日常生活のニーズを評価し、個々のケアプラン作成をお願いします。
                        </p>
                        <p>
                          また、定期的にご入居者様やご家族様と面談を行い、健康状態やケアプランについての情報を共有し、適切なサポートをお願いします。
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>雇用形態</th>
                      <td>
                        <ul>
                          <li>正社員</li>
                          <li>パート</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>応募資格</th>
                      <td>
                        <p>
                          介護支援専門員の資格をお持ちの方で、日勤帯フルタイム勤務が可能な方。(経験年数・ブランクは問いません)
                        </p>
                        <ul>
                          <li>正社員</li>
                          <li>時間給社員</li>
                          <li>パート</li>
                        </ul>
                      </td>
                    </tr>
                    <tr>
                      <th>勤務時間</th>
                      <td>
                        <ul>
                          <li>平常勤務 9:00 ~ 18:00</li>
                        </ul>
                        <p>※ 施設によって変動あり</p>
                      </td>
                    </tr>
                    <tr>
                      <th>給与</th>
                      <td>
                        <ul>
                          <li>
                            基本給 + 調整手当 (経験・年数により優遇いたします)
                            <p>月給 250,000円 ~ 300,000円</p>
                          </li>
                          <li>
                            介護支援専門員
                            <p>月給 259,000円 ～ 309,000円</p>
                          </li>
                          <li>
                            主任介護支援専門員
                            <p>月給 260,000円 ～ 300,000円</p>
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              }
            />
          </div>
        </section>
        <Contact className={useScrollAnimationStyles.fadeInUp} />
        <Advertisement className={useScrollAnimationStyles.fadeInUp} />
      </Container>
      <Footer />
    </div>
  );
};

export default Recruitment;
