'use client';

import { ColorTheme } from '@/app/providers/styled-components-provider';
import styled from 'styled-components';

export const ICON_SIZE = '6rem';

type AnchorProps = {
  currentTheme: ColorTheme;
};

export const Anchor = styled.a<AnchorProps>`
  font-size: large;
  height: ${ICON_SIZE};
  min-width: 8rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  text-transform: uppercase;
  transition: letter-spacing 1s;
  color: ${({ theme, currentTheme }) =>
    currentTheme === 'light'
      ? theme.color.background_secondary
      : theme.color.accent_light};

  &::before {
    content: '';
    position: absolute;
    inset: 50% 0;
    width: 100%;
    height: 2rem;
    background-color: ${({ theme }) => theme.color.background_primary};
    margin-top: -1rem;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 50% 0;
    margin-top: 1.25rem;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, currentTheme }) =>
      currentTheme === 'light'
        ? theme.color.background_secondary
        : theme.color.accent_light};
  }

  &:hover {
    letter-spacing: 0.1rem;

    & svg {
      opacity: ${({ currentTheme }) => (currentTheme === 'light' ? 0.4 : 0.8)};
      transition: opacity 0.7s;
    }
  }
`;

export const SocialsIcon = styled.div`
  position: absolute;
  inset: 0;
  width: ${ICON_SIZE};
  height: 100%;
  display: flex;
  align-items: center;
  z-index: -2;
  margin: 0 auto;

  & > svg {
    opacity: 0;
    color: ${({ theme }) => theme.color.glass_effect_background};
  }
`;
