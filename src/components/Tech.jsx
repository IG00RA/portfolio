import { motion } from "framer-motion";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "../utils/motion";

const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;

const Tech = () => {
  const textAnimationProps = isTouchDevice
    ? { initial: { x: -50, opacity: 0 }, animate: { x: 0, opacity: 1 } }
    : { variants: textVariant() };
  return (
    <>
      <motion.div {...textAnimationProps}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
