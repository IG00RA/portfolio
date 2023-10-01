import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { StyledBallCanvas } from "./Tech.styled";

export const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>My skills</p>
        <h2 className={styles.sectionHeadTextLight}>Technologies</h2>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-10 mt-14">
        {technologies.map((technology) => (
          <StyledBallCanvas key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </StyledBallCanvas>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
