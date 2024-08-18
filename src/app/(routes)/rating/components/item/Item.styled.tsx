import Flex from '@/app/components/flex/Flex';
import { BREAKPOINTS } from '@/app/styles/breakpoints';
import { GlassEffect } from '@/app/styles/global.styled';
import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  ${GlassEffect}
  border: 0.25rem solid ${({ theme }) => theme.color.accent_dark};
  align-items: end;

  @media (width <= ${BREAKPOINTS.desktop}) {
    grid-template-columns: 1fr;
    width: 100%;
  }
`;

export const ItemsWrapper = styled(Flex)`
  width: 100%;

  & h3 {
    padding-bottom: 1rem;
  }

  & button {
    margin-bottom: 1rem;
  }

  & > *:not(:last-child) {
    margin-bottom: -0.25rem;
  }
`;

type ItemRowProps = {
  gridTemplateColumns: string;
};

export const Row = styled.article<ItemRowProps>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  align-items: center;

  ${({ gridTemplateColumns }) =>
    gridTemplateColumns === 'repeat(2, 1fr) 3fr' &&
    css`
      @media (width <= ${BREAKPOINTS.desktop}) {
        grid-template-columns: 2fr 1fr;
        row-gap: 0.5rem;

        & img {
          max-height: 10rem;
          aspect-ratio: 3 / 1;
          margin-right: 0.5rem;
          overflow: hidden;
        }
      }

      @media (width <= ${BREAKPOINTS.mobile}) {
        grid-template-columns: 1fr 1fr;
        row-gap: 0.5rem;

        & img {
          max-height: 10rem;
          aspect-ratio: 1 / 1;
        }
      }
    `}

  & > *:not(:first-child:has(img)) {
    padding: 1rem 0.5rem 1.5rem;
  }

  & select {
    padding: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const ItemTitleContainer = styled(Flex)`
  @media (width <= ${BREAKPOINTS.desktop}) {
    grid-row: 2;
    grid-column: span 3;
    text-align: center;
  }
`;
export const ItemTitle = styled.span`
  font-size: 1.5rem;
`;

export const RatingNumber = styled.span`
  font-size: 3rem;
  color: ${({ theme }) => theme.color.accent_dark};
`;

export const FavoriteLetters = styled.span`
  font-size: 2rem;
  color: ${({ theme }) => theme.color.glass_effect_border};
  padding-bottom: 0.25rem;
`;
