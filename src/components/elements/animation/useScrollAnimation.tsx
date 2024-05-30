import { useEffect } from "react";
import styles from "./useScrollAnimation.module.css";

const useScrollAnimation = (selectors: string[], offset = 0) => {
  useEffect(() => {
    const elements = selectors.map((selector) =>
      document.querySelectorAll(selector)
    );

    const handleScroll = () => {
      elements.forEach((nodeList, index) => {
        nodeList.forEach((element) => {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight - offset) {
            element.classList.add(styles.active);
          } else {
            element.classList.remove(styles.active);
          }
        });
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [selectors, offset]);
};

export default useScrollAnimation;
