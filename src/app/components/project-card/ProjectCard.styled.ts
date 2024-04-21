import styled, { css, keyframes } from 'styled-components';

const flipCardToFront = keyframes`
  to {
    transform: rotateY(180deg);
  }
`;

const flipCardToBack = keyframes`
  from {
    transform: rotateY(180deg);
  }
  to {
    transform: rotateY(0);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 2px 4px 0 ${(props) => props.theme.color.background_primary};
  border: 0.25rem solid ${(props) => props.theme.color.line_dark};
  background-color: ${(props) => props.theme.color.background_primary};
`;

type CardProps = {
  hasAnimation: boolean;
  isBeforeFirstAnimationRun: boolean;
};

export const Card = styled.div<CardProps>`
  height: 300px;
  width: 100%;
  perspective: 1000px;

  ${({ hasAnimation }) =>
    hasAnimation &&
    css`
      ${Content} {
        animation: ${flipCardToFront} 2s forwards;
      }
    `};

  ${({ hasAnimation, isBeforeFirstAnimationRun }) =>
    !hasAnimation &&
    !isBeforeFirstAnimationRun &&
    css`
      ${Content} {
        animation: ${flipCardToBack} 2s forwards;
      }
    `};

  & p,
  & h3 {
    margin-block: 0;
  }
`;

export const bothSidesStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Front = styled.div`
  ${bothSidesStyles};
`;

export const Back = styled.div`
  ${bothSidesStyles};
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
  position: relative;

  & iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border: none;
    pointer-events: none;
  }
`;

export const Thumbnail = styled.div`
  width: calc(100% / 3);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
