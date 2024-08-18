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
