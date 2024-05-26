import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const CVContainer = styled.section`
  padding-top: 3rem;
  margin: 0 auto;
  width: 100%;

  @media (width >= ${BREAKPOINTS.desktop}) {
    max-width: 75%;
  }
`;
