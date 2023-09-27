import styled from "styled-components";
import { animated } from "react-spring";

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

export const BorderCircle = styled(animated.div)`
  border: 1px solid #7a7a7a6b;
  border-radius: 50%;
  position: relative;
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;

  &.show {
    opacity: 1;
    transform: scale(1);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const ScrollToTopIcon = styled.div`
  color: #7a7a7a;
  font-size: 24px;
  transition: transform 0.3s ease-in-out;

  ${BorderCircle}:hover & {
    transform: scale(1.4);
  }
`;
