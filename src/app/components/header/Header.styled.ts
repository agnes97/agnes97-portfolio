'use client';

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

  & > h1 {
    margin-block: 0;
  }

  @media (width <= 740px) {
    flex-direction: column-reverse;
  }
`;

export const ThemeButton = styled.button`
  all: unset;
  color: ${({ theme }) => theme.color.text_link};
  cursor: pointer;
`;
