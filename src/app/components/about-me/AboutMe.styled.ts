'use client';

import { ColorTheme } from '@/app/providers/styled-components-provider';
import styled from 'styled-components';

type AboutMeProps = {
  currentTheme: ColorTheme;
};

export const AboutMeContainer = styled.section<AboutMeProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  gap: 2rem;

  @media (width <= 740px) {
    flex-direction: column-reverse;
  }

  & > * {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & p {
    max-width: 35rem;
  }

  & p::first-letter {
    font-weight: bold;
    font-size: 200%;
    padding: 0.25rem;
    color: ${({ theme, currentTheme }) =>
      currentTheme === 'dark'
        ? theme.color.text_link
        : theme.color.accent_light};
  }

  & > div:first-child {
    display: flex;
    flex-direction: column;
    color: white;
    align-items: end;
    gap: 3rem;
  }
`;
