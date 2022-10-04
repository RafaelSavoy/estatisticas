import styled, { css, keyframes } from "styled-components";

export const fadeIn = keyframes`
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;
export const StyledMain = styled.main`
  animation: ${fadeIn} 2s;
`;
