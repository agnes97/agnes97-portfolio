import { GlassEffect } from '@/app/styles/global.styled';
import styled from 'styled-components';

export const ItemRow = styled.article`
  display: grid;
  grid-template-columns: repeat(2, 1fr) 3fr repeat(4, 1fr);
  align-items: end;
  gap: 1rem;
  ${GlassEffect}
  border: 0.25rem solid ${({ theme }) => theme.color.accent_dark};

  & > *:not(:first-child) {
    padding: 1rem 0 1.5rem;
  }

  & select {
    padding: 0.5rem;
    font-size: 1.5rem;
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
