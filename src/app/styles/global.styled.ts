"use client";

import styled, { createGlobalStyle, css, withTheme } from 'styled-components'
import { useTheme } from '../providers/styled-components-provider';

export const GlobalStyle = createGlobalStyle`
  html, & * { box-sizing: border-box }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  a {
    all: unset;
    cursor: pointer;
  }
`

export const GlassEffect = css`
     ${() => {
      const { currentThemeVariant } = useTheme();

      return `
        background: ${currentThemeVariant === 'dark' ? "rgba(255, 255, 255, 0.1)" : "rgba(255, 255, 255, 0.3)"};
        border: 1px solid rgba(255, 255, 255, ${currentThemeVariant === 'dark' ? 0.3 : 0.6});
     `
    }};
    backdrop-filter: blur(10%);
    `

export const FlexColumn = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const FlexRow = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Main = styled.main`
  width: 100%;
  min-height: 100vh;
  ${FlexColumn}
  background: ${({ theme }) => theme.color.backgroundGradient};
  color: ${({ theme }) => theme.color.text_primary};
`

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.color.line_light};
`

export const Grating = styled.section`
  ${FlexColumn};
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (min-width: 740px) {
    width: 80%;
  }

  @media (min-width: 1440px) {
    width: 50%;
  }

  & h2 {
    white-space: nowrap;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Sacramento";
    
    font-size: 3.5rem;

    @media (min-width: 740px) {
      font-size: 5.5rem;
    }

    @media (min-width: 1440px) {
      font-size: 7rem;
    }

  ${({ theme }) => css`
    text-shadow: 
      0 0 5px ${theme.color.accent_light},     
      0 0 15px white,                          
      0 0 20px ${theme.color.accent_light},    
      0 0 40px ${theme.color.accent_dark},     
      0 0 60px #000000,                        
      0 0 10px white,                          
      0 0 98px ${theme.color.accent_dark};     
  `}
  }
`

export const Content = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
  flex-grow: 1;
`

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
`

export const AboutMe = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  gap: 2rem;
  
  & > * { 
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p::first-letter {
    font-weight: bold;
    font-size: 200%;
    padding: 0.25rem;
    color: ${({ theme }) => theme.color.text_link};
  }
`
