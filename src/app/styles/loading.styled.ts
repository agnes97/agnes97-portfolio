'use client';

import styled, { keyframes } from 'styled-components';

const rotatingLoader = keyframes`
 to {
  transform: rotate(360deg);
}`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    animation: ${rotatingLoader} 2s ease-in-out infinite alternate;
  }
`;
