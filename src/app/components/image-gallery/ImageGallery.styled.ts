import { ColorTheme } from '@/app/providers/styled-components-provider';
import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

type GalleryProps = {
  currentTheme: ColorTheme;
};

export const Gallery = styled.section<GalleryProps>`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  gap: 1.5rem;

  & > button {
    grid-row: 2;
    grid-column: 1;
  }

  @media (width >= ${BREAKPOINTS.ipad}) {
    grid-template-columns: 1fr auto 1fr;

    & > button:nth-of-type(1) {
      grid-row: 1;
      grid-column: 1;
      align-self: center;
    }

    & > button:nth-of-type(2) {
      grid-row: 2;
      grid-column: 2;
      align-self: center;
    }

    & > button:nth-of-type(3) {
      grid-row: 1;
      grid-column: 3;
      align-self: center;
    }
  }

  & > div {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-column: 1;

    @media (width >= ${BREAKPOINTS.ipad}) {
      grid-column: 2;
      grid-row: 1;
    }

    & > img {
      max-width: 100%;
      max-height: 80vh;
      border: 3px solid
        ${({ theme, currentTheme }) =>
          currentTheme === 'dark'
            ? theme.color.text_link
            : theme.color.accent_light};
    }
  }
`;

type NavButtonProps = {
  currentTheme: ColorTheme;
};

export const NavButton = styled.button<NavButtonProps>`
  all: unset;
  position: relative;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.25rem;
  color: ${({ theme }) => theme.color.text_primary};
  cursor: pointer;
  height: min-content;
  width: min-content;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.25;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 0.5rem;
    background-color: ${({ theme, currentTheme }) =>
      currentTheme === 'dark'
        ? theme.color.text_link
        : theme.color.accent_light};
    z-index: -1;
    filter: opacity(0.7);
  }
`;
