import styled from "styled-components";

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
    color: #000;
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

export const StyledNav = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  justify-content: end;
`;

export const StyledListItem = styled.li`
  color: ${(props) => (props.active ? "rgb(181 181 186)" : " rgb(31 31 31)")};
  font-size: 88px;
  font-weight: bold;
  font-family: "arenq";
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
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

export const NavWrap = styled.div`
  overflow: hidden;
`;
