import { motion } from "framer-motion";
import { styles } from "../../styles";
import { igoora, bwmap, ukmap } from "../../img";
import Particle from "../Particle";
import {
  HeroTextWrap,
  PersonalImg,
  ScrollWrap,
  StyledHeader,
  StyledHeroSection,
  StyledHeroText,
} from "./Hero.styled";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={ukmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>

      <StyledHeroSection
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
 overflow-hidden"
      >
        <Particle />
        <HeroTextWrap>
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] sm:hidden" />
            <div className="w-1 sm:h-80 h-40 bw-gradient sm:hidden" />
          </div>

          <div>
            <StyledHeader
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I'm <br className="sm:block hidden" />
              <span
                className="sm:text-battleGray text-eerieBlack font-mova
                font-extrabold uppercase"
              >
                Ihor Hromadskiy
              </span>
            </StyledHeader>
            <StyledHeroText className={`${styles.heroSubText} text-eerieBlack`}>
              Passionate FullStack developer <br className="sm:hidden block" />
              dedicated to crafting elegant
              <br className="sm:hidden block" /> and functional applications.
              <br className="md:hidden block" />
              Let's connect and discuss
              <br className="sm:hidden block" /> more about my skills and
              accomplishments.
            </StyledHeroText>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </HeroTextWrap>
        <ScrollWrap
          className="absolute w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
            border-french border-dim flex
            justify-center items-start p-2"
            >
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
        <div
          style={{ position: "relative" }}
          className="absolute top-0 left-0 z-0 w-full h-[100vh]"
        ></div>
      </StyledHeroSection>
    </>
  );
};

export default Hero;
