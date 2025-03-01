'use client';

import styled, { createGlobalStyle, css } from 'styled-components';
import { BREAKPOINTS } from './breakpoints';

export const GlobalStyle = createGlobalStyle`
  html, & * { 
    box-sizing: border-box;
    scroll-behavior: smooth;
 }

  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, sans-serif;
  }

  a {
    all: unset;
    cursor: pointer;
  }

  h1, h2 {
    font-family: Sacramento, serif;
    margin-block: 0;
  }

  h1 {
    font-size: 3.5rem;

    @media (width >= ${BREAKPOINTS.ipad}) {
      font-size: 5.5rem;
    }

    @media (width >= ${BREAKPOINTS.desktop}) {
      font-size: 7rem;
    }
  }

  h2 {
    font-size: 2rem;
    text-align: center;

    @media (width >= ${BREAKPOINTS.ipad}) {
      font-size: 2.5rem;
    }
  }

  h3 {
    font-size: 1.75;
    text-align: center;
  }
`;

export const GlassEffect = css`
  background: ${({ theme }) => theme.color.glass_effect_background};
  border: 1px solid ${({ theme }) => theme.color.glass_effect_border};
  backdrop-filter: blur(10%);
`;

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FlexRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  width: 100vw;
  overflow-x: clip;
  min-height: 100vh;
  ${FlexColumn}
  background: ${({ theme }) => theme.color.background_primary};
  color: ${({ theme }) => theme.color.text_primary};

  @media (width >= ${BREAKPOINTS.ipad}) {
    background: ${({ theme }) => theme.color.backgroundGradient};
  }
`;

type DividerProps = {
  hideOnMobile?: boolean;
};

export const Divider = styled.hr<DividerProps>`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.line_light};
  ${({ hideOnMobile }) =>
    hideOnMobile &&
    `
    @media (width <= ${BREAKPOINTS.ipad}) {
     display: none;
    }
  `}

  @media (width <= ${BREAKPOINTS.mobile}) {
    width: 150%;
    margin: 0 -25%;
  }
`;

export const Grating = styled.section`
  ${FlexColumn};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (width >= ${BREAKPOINTS.ipad}) {
    width: 80%;
    padding: 5rem 0;
  }

  @media (width >= ${BREAKPOINTS.desktop}) {
    width: 50%;
  }

  /* Hide lines on smaller screens */
  & hr {
    @media (width <= ${BREAKPOINTS.ipad}) {
      display: none;
    }
  }

  & h1 {
    white-space: nowrap;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ theme }) => css`
      text-shadow:
        0 0 5px ${theme.color.accent_light},
        0 0 15px white,
        0 0 20px ${theme.color.accent_light},
        0 0 40px ${theme.color.accent_dark},
        0 0 60px black,
        0 0 10px white,
        0 0 98px ${theme.color.accent_dark};
    `}
  }
`;

export const Table = styled.section`
  width: calc(100% + 10rem);
  margin: 0 -5rem;
  height: 20rem;
  position: relative;
  border-top-right-radius: 5rem 20rem;
  border-top-left-radius: 5rem 20rem;

  & > p {
    padding: 5rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    height: 100%;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    ${GlassEffect};
    border-top-right-radius: 5rem 20rem;
    border-top-left-radius: 5rem 20rem;
    z-index: 0;
  }
`;

export const externalLinkStyles = css`
  font-size: smaller;
  color: ${({ theme }) => theme.color.accent_light};
`;

export const ExternalLink = styled.a`
  ${externalLinkStyles};
`;
