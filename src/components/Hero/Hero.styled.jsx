import styled from "styled-components";

export const ScrollWrap = styled.div`
  bottom: 2rem;
  @media (min-width: 1536px) {
    bottom: 4rem;
  }
`;

export const StyledHeader = styled.h1`
  font-size: 37px;
  @media (min-width: 375px) {
    font-size: 47px;
  }
  @media (min-width: 640px) {
    font-size: 42px;
  }
  @media (min-width: 768px) {
    font-size: 47px;
  }
`;

export const StyledHeroSection = styled.section`
  background-image: linear-gradient(
    127deg,
    rgba(244, 244, 246, 0.85) 65%,
    rgba(10, 10, 10, 0.85) 35%
  );
  @media (min-width: 640px) {
    background-image: linear-gradient(
      135deg,
      rgba(244, 244, 246, 0.85) 60%,
      rgba(10, 10, 10, 0.85) 40%
    );
  }
`;
export const PersonalImg = styled.img`
  margin-left: 50vw;
  bottom: 0px;
  position: absolute;
  max-width: 100%;
  height: auto;
  @media (min-width: 420px) {
    height: 40vh;
    margin-left: 50vw;
  }
  @media (min-width: 640px) {
    height: 50vh;
    margin-left: 60vw;
  }
  @media (min-width: 768px) {
    height: 60vh;
  }
  @media (min-width: 900px) {
    margin-left: 60vw;
  }
  @media (min-width: 1025px) {
    margin-left: 65vw;
  }
  @media (min-width: 1280px) {
    height: 70vh;
  }
  @media (min-width: 1536px) {
    margin-left: 60vw;
  }
`;

export const HeroTextWrap = styled.div`
  inset: 0px;
  position: absolute;
  display: flex;
  gap: 0.75rem;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  max-width: 80rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  top: 150px;
  @media (min-width: 640px) {
    top: 110px;
  }
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
  @media (min-width: 1025px) {
    top: 150px;
  }
  @media (min-width: 1280px) {
    top: 250px;
  }
`;
export const StyledHeroText = styled.div`
  width: 75%;
`;
