import styled, { keyframes, css } from "styled-components";
import { Link } from "react-router-dom";

export const StyledDesktopNav = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 2px;
  position: fixed;
  top: 0;
  z-index: 20;
  background-color: rgb(244 244 246);
  opacity: 0.97;

  @media (max-width: 639px) {
    height: 12vh;
  }
`;
export const NavWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 80rem;
  margin: 0 auto;
`;
export const StyledLogoText = styled.img`
  width: 85px;
  height: 85px;
  margin-left: 0.6rem;
  object-fit: contain;

  @media (min-width: 640px) {
    display: none;
    width: 90px;
    height: 90px;
  }
  @media (min-width: 768px) {
    display: block;
  }
`;
export const StyledSmallLogo = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;

  @media (min-width: 640px) {
    width: 50px;
    height: 50px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const StyledUl = styled.ul`
  list-style: none;
  display: none;

  @media (min-width: 640px) {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
    margin-top: 0.5rem;
  }
`;

export const NavLinks = styled.div`
  color: black;
`;
export const NavLinksWrap = styled.div`
  display: flex;
  height: 90%;
  flex-direction: column;
  justify-content: space-between;
`;
export const StyledSocial = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  li::before {
    content: "|";
    margin: 0 10px;
    color: rgb(31 31 31);
  }
  li:first-child::before {
    content: "";
    margin: 0;
  }
`;
export const StyledContacts = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  img {
    width: 20px;
    height: 20px;
    fill: rgb(31 31 31);
    margin-right: 8px;
  }
`;

export const StyledContactsLink = styled.a`
  color: rgb(31 31 31);
  font-size: 18px;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(31 31 31);
    transform: scaleX(0);
    transform-origin: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    background-color: rgb(31 31 31);
  }
`;

export const StyledSocialLink = styled.a`
  color: rgb(31 31 31);
  font-family: "Mova";
  font-size: 20px;
  position: relative;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(31 31 31);
    transform: scaleX(0);
    transform-origin: center;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  &:hover::after,
  &:focus::after {
    transform: scaleX(1);
    background-color: rgb(31 31 31);
  }
`;

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: end;
`;

export const StyledListItem = styled.li`
  color: rgb(31 31 31);
  font-size: 88px;
  font-weight: bold;
  font-family: "arenq";
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: color 0.3s ease;
  &.active {
    color: rgb(181 181 186);
  }
  &:hover {
    color: rgb(181 181 186);
  }
`;

export const StyledDesktopListItem = styled.li`
  color: rgb(31 31 31);
  font-size: 21px;
  font-weight: 500;
  font-family: "Mova";
  text-transform: uppercase;
  letter-spacing: 3px;
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
  &:hover {
    color: rgb(181 181 186);
  }
`;

export const NavLink = styled.a`
  position: relative;

  &.active {
    color: rgb(181 181 186);
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(31 31 31);
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const IconWrap = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 20px;
  cursor: pointer;

  img {
    width: 22px;
    height: 22px;
    object-fit: contain;
    transition: transform 0.3s ease;
  }

  &:hover img,
  &:focus img {
    transform: scale(1.3);
  }
`;
const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-100%);
  }
`;

export const NavWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  padding: 2rem;
  background-color: rgba(244, 244, 246, 0.99); /* Змініть кольори на ваш смак */

  opacity: 0; /* Початкова прозорість */
  animation: ${(props) =>
    props.isopen
      ? css`
          ${slideIn} 0.9s ease forwards
        `
      : css`
          ${slideOut} 0.9s ease forwards
        `};
  &.menu-open {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const StyledMobileMenu = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    img {
      transition: transform 0.3s ease;
      &:hover {
        transform: scale(1.2);
      }
    }
  }
`;
export const StyledMenuImage = styled.img`
  width: 34px;
  height: 34px;
  object-fit: contain;
  cursor: pointer;
  &:hover {
  }
`;
