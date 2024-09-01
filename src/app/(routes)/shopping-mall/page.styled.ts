'use client';

import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (width <= ${BREAKPOINTS.mobile}) {
    padding: 0 1rem;
  }
`;

export const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (width <= ${BREAKPOINTS.mobile}) {
    flex-flow: column nowrap;
    width: 100%;
  }
`;
