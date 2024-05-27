'use client';

import { ColorTheme } from '@/app/providers/styled-components-provider';
import styled, { css, keyframes } from 'styled-components';
import Flex from '../flex/Flex';
import { BREAKPOINTS } from '@/app/styles/breakpoints';

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
  height: 100%;
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

  & svg:hover {
    color: ${({ theme }) => theme.color.line_dark};
  }

  & svg:hover + span {
    color: ${({ theme }) => theme.color.line_dark};
  }

  &:hover img {
    filter: grayscale(0%);
  }
`;

type BackProps = {
  backgroundColor: string;
};

export const Back = styled.div<BackProps>`
  ${bothSidesStyles};
  transform: rotateY(180deg);
  height: 100%;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.backgroundColor};

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

type ThumbnailProps = {
  isThumbnailTransparent: boolean;
};

export const Thumbnail = styled.div<ThumbnailProps>`
  width: 100%;
  flex-shrink: 0;
  padding: 2rem 0 1rem;

  @media (width >= ${BREAKPOINTS.ipad}) {
    padding: 0;
    width: calc(100% / 2);
  }

  & > img {
    @media (width <= ${BREAKPOINTS.mobile}) {
      border-radius: 50%;
      width: 35%;
    }

    @media (width <= ${BREAKPOINTS.ipad}) {
      border-radius: 50%;
      width: 50%;
    }

    border-radius: none;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    filter: grayscale(100%);
    object-fit: ${({ isThumbnailTransparent }) =>
      isThumbnailTransparent ? 'scale-down' : 'cover'};
    aspect-ratio: 1 / 1;
    transition: filter 0.75s;

    ${({ isThumbnailTransparent }) =>
      isThumbnailTransparent &&
      css`
        padding: 1.5rem 0 1.5rem 1rem;
      `}
  }
`;

type ProjectLinkProps = {
  currentTheme: ColorTheme;
};

export const ProjectLinkSpan = styled.span<ProjectLinkProps>`
  font-size: smaller;
  color: ${({ theme, currentTheme }) =>
    currentTheme === 'dark'
      ? theme.color.accent_light
      : theme.color.background_secondary};
`;

export const ClickToFlip = styled.p`
  color: ${({ theme }) => theme.color.warning};
`;

type CardTitleProps = {
  currentTheme: ColorTheme;
};

export const CardTitle = styled.h3<CardTitleProps>`
  color: ${({ theme, currentTheme }) =>
    currentTheme === 'dark'
      ? theme.color.accent_light
      : theme.color.background_secondary};
`;

type ThisProjectProps = {
  currentTheme: ColorTheme;
};

export const ThisProject = styled(Flex)<ThisProjectProps>`
  flex-direction: column;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
  pointer-events: none;

  & > span,
  & > svg {
    font-size: smaller;
    color: ${({ theme, currentTheme }) =>
      currentTheme === 'dark'
        ? theme.color.accent_light
        : theme.color.background_secondary};
  }
`;

type CardInfoProps = {
  isThumbnailTransparent: boolean;
  border: 'left' | 'right';
};

export const CardInfo = styled(Flex)<CardInfoProps>`
  @media (width >= ${BREAKPOINTS.ipad}) {
    ${({ isThumbnailTransparent, theme, border }) =>
      !isThumbnailTransparent &&
      `border-${border}: 0.25rem solid ${theme.color.line_dark};`}
  }
`;

export const CardDescription = styled.p`
  max-height: 150px;
  padding: 0 1rem;
  overflow: scroll;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (width > ${BREAKPOINTS.mobile}) {
    padding: 0 2rem;
  }

  @media (width >= ${BREAKPOINTS.ipad}) {
    max-height: 175px;
    padding: 0;
  }
`;
