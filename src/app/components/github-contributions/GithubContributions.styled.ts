import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;

  & > img {
    width: 100%;
  }

  @media (width >= 740px) {
    & > img {
      width: 80%;
      margin-right: 2rem;
    }
  }
`;
