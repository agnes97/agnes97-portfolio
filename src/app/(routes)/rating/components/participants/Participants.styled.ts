import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media (width >= ${BREAKPOINTS.desktop}) {
    justify-content: end;
    position: absolute;
    right: 6rem;
    margin-right: 6rem;
  }
`;

type Props = {
  initials: string;
};

export const InnerContainer = styled.div<Props>`
  position: relative;
  border: 0.5rem solid ${({ theme }) => theme.color.background_primary};
  border-radius: 50%;
  overflow: hidden;

  &:not(:last-child) {
    margin-right: -12rem;
  }

  &:hover {
    & img {
      transform: scale(1.5);
      transition: transform 500ms ease-in-out;
    }

    &:after {
      content: '${({ initials }) => initials}';
      position: absolute;
      inset: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      font-size: 2.5rem;
      font-weight: bolder;
      font-family: Sacramento, serif;
      opacity: 40%;
    }
  }

  & > img {
    width: 5rem;
    aspect-ratio: 1 / 1;
    display: block;
    object-fit: cover;
    transition: transform 500ms ease-in-out;
  }
`;
