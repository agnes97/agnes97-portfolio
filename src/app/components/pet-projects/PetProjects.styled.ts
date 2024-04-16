'use client';

import styled, { css, keyframes } from 'styled-components';

const walkingPaws = keyframes`
    50% {
        opacity: 1;
    }
`;

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 2rem;
  min-height: 30rem;
  padding: 5rem 0;
`;

type AnimatedHeadingProps = {
  hasAnimation: boolean;
};

export const AnimatedHeading = styled.div<AnimatedHeadingProps>`
  position: relative;
  display: flex;
  gap: 0.5rem;

  & h2 {
    padding: 0 0.5rem;
  }

  & svg {
    opacity: 0;
    stroke: ${({ theme }) => theme.color.accent_light};
  }

  & svg:nth-of-type(1) {
    margin-top: 1rem;
  }

  & svg:nth-of-type(2) {
    margin-top: 2rem;
  }

  & svg:nth-of-type(3) {
    margin-top: -2rem;
  }

  & svg:nth-of-type(4) {
    margin-top: -1rem;
  }

  ${({ hasAnimation }) =>
    hasAnimation &&
    css`
      & svg:nth-of-type(1) {
        animation: ${walkingPaws} 2s forwards;
      }

      & svg:nth-of-type(2) {
        animation: ${walkingPaws} 2s forwards 1s;
      }

      & svg:nth-of-type(3) {
        animation: ${walkingPaws} 2s forwards 2s;
      }

      & svg:nth-of-type(4) {
        animation: ${walkingPaws} 2s forwards 3s;
      }
    `}
`;
