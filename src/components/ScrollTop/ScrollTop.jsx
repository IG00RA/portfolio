import { useEffect, useState } from "react";
import {
  BorderCircle,
  ButtonContainer,
  ScrollToTopIcon,
} from "./ScrollTop.styled";

export default function ScrollTop() {
  const [scrollInfo, setScrollInfo] = useState({
    isVisible: false,
    scrollY: 0,
    circleProgress: 0,
  });

  const handleScroll = () => {
    const newScrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = (newScrollY / maxScroll) * 100;

    setScrollInfo({
      isVisible: newScrollY > 300,
      scrollY: newScrollY,
      circleProgress: progress,
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollInfo]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const { isVisible, circleProgress } = scrollInfo;

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
