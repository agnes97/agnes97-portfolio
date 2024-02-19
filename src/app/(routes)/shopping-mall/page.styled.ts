import { GlassEffect } from '@/app/styles/global.styled';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 400px) {
    padding: 0 1rem;
  }
`;

export const Gallery = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 400px) {
    flex-direction: column;
    flex-wrap: nowrap;
    width: 100%;
  }
`;

export const Card = styled.a`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 200px;
  ${GlassEffect}
  border: 1px solid ${({ theme }) => theme.color.line_light};

  @media (max-width: 400px) {
    width: 100%;

    & > div {
      width: 100%;

      & > img {
        width: 100%;
      }
    }
  }

  & > header,
  & > footer {
    padding: 0.5rem;
  }

  & > header {
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  & > footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: -0.5rem;
  }
`;

export const Title = styled.span`
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
