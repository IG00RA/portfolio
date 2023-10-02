import styled, { keyframes } from "styled-components";

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-30px);
  }
  60% {
    transform: translateY(-15px);
  }
`;

export const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ffffffa8;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  display: grid;
  place-items: center;
`;

export const LoaderImage = styled.img`
  animation: ${bounce} 1.5s infinite;
`;
