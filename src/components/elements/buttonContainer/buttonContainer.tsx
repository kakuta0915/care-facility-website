import React from "react";
import styles from "./buttonContainer.module.css";

interface ButtonContainerProps {
  scrollToSection: (ref: React.RefObject<HTMLDivElement>) => void;
  caregiverRef: React.RefObject<HTMLDivElement>;
  nurseRef: React.RefObject<HTMLDivElement>;
  careManagerRef: React.RefObject<HTMLDivElement>;
  counselorRef: React.RefObject<HTMLDivElement>;
  managementRef: React.RefObject<HTMLDivElement>;
  assistanceRef: React.RefObject<HTMLDivElement>;
}

const ButtonContainer: React.FC<ButtonContainerProps> = ({
  scrollToSection,
  caregiverRef,
  nurseRef,
  careManagerRef,
  counselorRef,
  managementRef,
  assistanceRef,
}) => {
  return (
    <div className={styles.buttonContainer}>
      <button onClick={() => scrollToSection(caregiverRef)}>介護士</button>
      <button onClick={() => scrollToSection(nurseRef)}>看護師</button>
      <button onClick={() => scrollToSection(careManagerRef)}>ケアマネ</button>
      <button onClick={() => scrollToSection(counselorRef)}>生活相談員</button>
      <button onClick={() => scrollToSection(managementRef)}>管理職</button>
      <button onClick={() => scrollToSection(assistanceRef)}>介護補助</button>
    </div>
  );
};

export default ButtonContainer;
