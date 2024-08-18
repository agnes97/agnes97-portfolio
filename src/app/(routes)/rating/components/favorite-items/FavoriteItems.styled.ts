import { GlassEffect } from '@/app/styles/global.styled';
import styled from 'styled-components';

export const EmptyFavoritesWrapper = styled.div`
  ${GlassEffect}
  min-height: 5rem;
  width: 100%;
  border: 0.25rem solid ${({ theme }) => theme.color.accent_dark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FavoritesInnerWrapper = styled.div`
  outline: 0.25rem solid ${({ theme }) => theme.color.background_secondary};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  & > *:not(:last-child) {
    margin-bottom: -0.25rem;
  }
`;
