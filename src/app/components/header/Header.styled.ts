'use client';

import { BREAKPOINTS } from '@/app/styles/breakpoints';
import { FlexRow, GlassEffect } from '@/app/styles/global.styled';
import styled from 'styled-components';

export const StyledHeader = styled.header`
  width: 100%;
  min-height: 5rem;
  padding: 2rem;
  ${GlassEffect};
  ${FlexRow};
  border-top: none;
  border-left: none;
  border-right: none;
  justify-content: space-between;
  gap: 2rem;

  @media (width <= ${BREAKPOINTS.ipad}) {
    flex-direction: column-reverse;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  position: relative;
  gap: 0.5rem;

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 130%;
    position: absolute;
    inset: -15% 50% 0;
    background-color: ${({ theme }) => theme.color.glass_effect_background};
    transform: rotate(45deg);
  }
`;

type HeaderButtonProps = {
  color: 'link' | 'white';
};

export const HeaderButton = styled.button<HeaderButtonProps>`
  all: unset;
  color: ${({ theme, color }) =>
    color === 'link' ? theme.color.text_link : theme.color.text_primary};
  cursor: pointer;

  & > svg {
    fill: transparent;
    transition: all 0.4s ease-in-out;
  }

  &:hover > svg {
    ${({ color, theme }) =>
      color === 'link'
        ? `
      fill: ${theme.color.text_link};
      `
        : `
      transform: rotate(360deg);
    `};
  }
`;
