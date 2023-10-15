'use client'

import styled, { createGlobalStyle, css } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html, & * { box-sizing: border-box }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
`

export const GlassEffect = css`
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10%);
    border: 1px solid rgba(255, 255, 255, 0.6);
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
  background: rgb(238,174,198);
  background: linear-gradient(90deg, 
    rgba(238,174,198,1) 0%, 
    rgba(143,114,205,1) 20%, 
    rgba(143,114,205,1) 80%, 
    rgba(238,174,198,1) 100%
  );
  /* background: rgb(56,85,110);
  background: linear-gradient(
    90deg, rgba(56,85,110,1) 0%, 
    rgba(39,40,44,1) 25%, 
    rgba(39,40,44,1) 75%, 
    rgba(56,85,110,1) 100%
  ); */
`

export const Header = styled.header`
  width: 100vw;
  min-height: 5rem;
  padding: 2rem;
  ${GlassEffect};
  ${FlexRow};
  border-top: none;
  border-left: none;
  border-right: none;
  justify-content: space-between;

  & > h1 {
    margin-block: 0;
  }
`

export const Grating = styled.section`
  ${FlexColumn};
  min-height: 15rem;
  padding: 1rem 0;
`

export const Content = styled.div`
  width: 80%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2rem 0;
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
  
  & > * { 
    flex: 1; 
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const Footer = styled.footer`
  width: 100vw;
  min-height: 5rem;
  padding: 2rem;
  ${GlassEffect};
  ${FlexRow};
  border-bottom: none;
  border-left: none;
  border-right: none;
`