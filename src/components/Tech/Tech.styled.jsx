import styled from "styled-components";

export const StyledBallCanvas = styled.div`
  width: 7rem;
  height: 7rem;
  @media (hover: none) {
    & > div {
      pointer-events: none !important;
    }
  }
`;
