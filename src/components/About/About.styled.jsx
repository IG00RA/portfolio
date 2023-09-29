import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledMotionDiv = styled(motion.div)`
  background: rgb(244, 244, 246);
  background: linear-gradient(
    158deg,
    rgba(153, 153, 161, 1) 25%,
    rgba(153, 153, 161, 1) 100%
  );
  --tw-shadow: 0px 35px 120px -15px #1f1f1f;
  --tw-shadow-colored: 0px 35px 120px -15px var(--tw-shadow-color);
  box-shadow: 0 0 #0000, 0 0 #0000, 0px 35px 120px -15px #1f1f1f;
  padding: 1px;
  border-radius: 20px;
  width: 100%;
  @media (min-width: 450px) {
    width: 45%;
  }
  @media (min-width: 768px) {
    width: 29%;
  }
  @media (min-width: 1024px) {
    width: 21%;
  }
`;
