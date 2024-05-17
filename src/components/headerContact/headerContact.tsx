import styles from "./headerContact.module.css";
import globalStyles from "@/src/globalStyle.module.css";

const HeaderContact: React.FC = () => {
  return (
    <div className={[styles.headerContact, globalStyles.styles].join(" ")}>
      <a href="/" className={styles.button1}>
        資料請求
      </a>
      <a href="/" className={styles.button2}>
        見学予約
      </a>
      <p className={styles.tell}>0120-123-456</p>
      <p className={styles.time}>営業時間 10:00 ~ 18:00</p>
    </div>
  );
};

export default HeaderContact;
