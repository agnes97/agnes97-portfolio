import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 3rem;
  padding: 5rem 0;

  & > img {
    width: 100%;
  }

  @media (width >= ${BREAKPOINTS.ipad}) {
    & > img {
      width: 80%;
      margin-right: 2rem;
    }
  }

  @media (width >= ${BREAKPOINTS.desktop}) {
    & > img {
      width: 70%;
      margin-right: 2rem;
    }
  }
`;
