import { motion } from "framer-motion";
import { styles } from "../../styles";
import { services } from "../../constants";
import { fadeIn, textVariant } from "../../utils/motion";
import { SectionWrapper } from "../../hoc";
import { StyledMotionDiv } from "./About.styled";
import { useEffect, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const About = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const maxItemsToShow = useMemo(() => {
    return windowWidth < 450 ? 4 : services.length;
  }, [windowWidth]);

  const ServiceCard = ({ index, title, icon }) => {
    const motionDivProps = useMemo(() => {
      if (windowWidth < 640) {
        return {
          initial: { x: -50, opacity: 0 },
          animate: { x: 0, opacity: 1 },
        };
      } else {
        return {
          variants: fadeIn("right", "spring", 0.5 * index, 0.75),
        };
      }
    }, [index]);

    return (
      <StyledMotionDiv {...motionDivProps}>
        <div className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-taupe text-[18px] font-bold text-center">
            {title}
          </h3>
        </div>
      </StyledMotionDiv>
    );
  };

  const motionTextProps = useMemo(() => {
    if (windowWidth < 640) {
      return {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
      };
    } else {
      return {
        variants: fadeIn("", "", 0.1, 1),
      };
    }
  }, [windowWidth]);

  const motionTitleProps = useMemo(() => {
    if (windowWidth < 640) {
      return {
        initial: { x: -50, opacity: 0 },
        animate: { x: 0, opacity: 1 },
      };
    } else {
      return {
        variants: textVariant(),
      };
    }
  }, [windowWidth]);

  return (
    <div>
      <motion.div {...motionTitleProps}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        {...motionTextProps}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]"
      >
        Welcome to my Full Stack Developer Portfolio! I&apos;m passionate about
        crafting innovative and functional solutions that bring ideas to life.
        With a strong foundation in both front-end and back-end development, I
        thrive in building seamless web applications that make a meaningful
        impact.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.slice(0, maxItemsToShow).map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

About.propTypes = {
  index: PropTypes.number,
  title: PropTypes.string,
  icon: PropTypes.string,
};

export default SectionWrapper(About, "about");
