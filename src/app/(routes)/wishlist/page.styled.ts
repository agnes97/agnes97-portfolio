import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  max-width: 1150px;

  & > div {
    @media (width <= ${BREAKPOINTS.mobile}) {
      max-width: 270px;
      width: 90% !important;
    }
  }

  & img {
    width: 268px;
    height: 271px;
    flex-grow: 1;
  }

  @media (width <= ${BREAKPOINTS.mobile}) {
    flex-flow: column nowrap;
    width: 100%;
    align-items: center;
  }
`;

export const WishlistBanner = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  align-self: stretch;
  box-sizing: border-box;
  width: 100%;
  max-width: 1150px;
  margin: -0.5rem 0 0.75rem;
  padding: 1rem 1.5rem;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.color.glass_effect_background};
  line-height: 1.75;

  & svg {
    flex-shrink: 0;
  }

  & mark {
    user-select: all;
    padding: 0 0.3em;
    border-radius: 0.3em;
    background: ${({ theme }) => theme.color.accent_dark};
    color: ${({ theme }) => theme.color.text_secondary};
  }

  @media (width <= ${BREAKPOINTS.mobile}) {
    width: auto;
    margin-inline: 1rem;
  }
`;

export const WishlistTitle = styled.h3`
  text-transform: uppercase;
`;
