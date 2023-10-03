import { motion } from "framer-motion";
import { BallCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { technologies } from "../../constants";
import { styles } from "../../styles";
import { textVariant } from "../../utils/motion";
import { StyledBallCanvas } from "./Tech.styled";
import { useTranslation } from "react-i18next";

export const Tech = () => {
  const { t } = useTranslation();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubTextLight}>{t("tech.par")}</p>
        <h2 className={styles.sectionHeadTextLight}>{t("tech.header")}</h2>
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
