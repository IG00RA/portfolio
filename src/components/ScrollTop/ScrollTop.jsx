import { useEffect, useState } from "react";
import {
  BorderCircle,
  ButtonContainer,
  ScrollToTopIcon,
} from "./ScrollTop.styled";

export default function ScrollTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [circleProgress, setCircleProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      // Обчислюємо прогрес за годинниковою стрілкою в залежності від положення прокрутки
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollY / maxScroll) * 100;
      setCircleProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [scrollY]);

  return (
    <>
      {isVisible && (
        <ButtonContainer onClick={scrollToTop}>
          <BorderCircle className={isVisible ? "show" : ""}>
            <svg viewBox="0 0 100 100" width="50" height="50">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="#7a7a7a"
                strokeWidth="4"
                strokeDasharray="301.6"
                strokeDashoffset={301.6 - (301.6 * circleProgress) / 100}
              />
            </svg>
            <ScrollToTopIcon>&uarr;</ScrollToTopIcon>
          </BorderCircle>
        </ButtonContainer>
      )}
    </>
  );
}
