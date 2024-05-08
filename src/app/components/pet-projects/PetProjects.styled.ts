'use client';

import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled, { css, keyframes } from 'styled-components';

const walkingPaws = keyframes`
    50% {
        opacity: 1;
    }
`;

type AnimatedHeadingProps = {
  hasAnimation: boolean;
  isAnimationBW?: boolean;
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
    stroke: ${({ theme, isAnimationBW }) =>
      isAnimationBW
        ? theme.color.glass_effect_background
        : theme.color.accent_light};
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

export const PetProjectsGrid = styled.div`
  width: 100%;
  display: grid;
  gap: 1.5rem;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(350px, 550px);

  @media (width >= ${BREAKPOINTS.ipad}) {
    grid-auto-rows: 350px;
  }

  @media (width >= ${BREAKPOINTS.desktop}) {
    grid-template-columns: 1fr 1fr;
  }
`;
