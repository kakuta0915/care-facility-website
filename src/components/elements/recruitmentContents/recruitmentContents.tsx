import React from "react";
import styles from "./recruitmentContents.module.css";

interface RecruitmentSectionLayoutProps {
  title: string;
  contents: React.ReactNode;
  className?: string;
}

const RecruitmentContents: React.FC<RecruitmentSectionLayoutProps> = ({
  title,
  contents,
  className,
}) => {
  return (
    <div className={`${styles.recruitmentContents} ${className}`}>
      <h3>{title}</h3>
      {contents}
    </div>
  );
};

export default RecruitmentContents;
