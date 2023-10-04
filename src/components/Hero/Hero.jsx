import { motion } from "framer-motion";
import { styles } from "../../styles";
import { igoora, bwmap, ukmap } from "../../img";
import {
  HeroTextWrap,
  PersonalImg,
  ScrollWrap,
  StyledHeader,
  StyledHeroSection,
  StyledHeroText,
} from "./Hero.styled";
import ParticleWrap from "../ParticleWrap";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          loading="lazy"
          src={bwmap}
          alt="world map"
          className="w-full h-full object-cover hidden sm:block"
        />
        <img
          loading="lazy"
          src={ukmap}
          alt="world map"
          className="w-full h-full object-cover sm:hidden"
        />
      </div>

      <StyledHeroSection className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-hidden">
        <ParticleWrap />

        <HeroTextWrap>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <StyledHeader
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              {t("hero.me")} <br className="sm:block hidden" />
              <span className="sm:text-battleGray text-eerieBlack font-mova font-extrabold uppercase">
                {t("hero.IH")}
              </span>
            </StyledHeader>
            <StyledHeroText>
              <p className={`${styles.heroSubText} text-eerieBlack`}>
                {t("hero.text")}.
              </p>
            </StyledHeroText>
          </div>
        </HeroTextWrap>

        <ScrollWrap className="absolute w-full flex justify-center items-center">
          <a href="#about" aria-label="Scroll to About section">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-french border-dim flex justify-center items-start p-2">
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </ScrollWrap>

        <div>
          <PersonalImg src={igoora} alt="Ihor Hromadskyi" />
        </div>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
