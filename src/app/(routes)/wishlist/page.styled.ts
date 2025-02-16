import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  & img {
    width: 268px;
    height: 271px;
    flex-grow: 1;
  }

  @media (width <= ${BREAKPOINTS.mobile}) {
    flex-flow: column nowrap;
    width: 100%;
  }
`;

export const WishlistTitle = styled.h3`
  text-transform: uppercase;
`;
