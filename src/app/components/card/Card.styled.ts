import { BREAKPOINTS } from '@/app/styles/breakpoints';
import { GlassEffect } from '@/app/styles/global.styled';
import styled, { css } from 'styled-components';

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  ${GlassEffect}
  border: 1px solid ${({ theme }) => theme.color.line_light};

  @media (width <= ${BREAKPOINTS.mobile}) {
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
    margin: -0.5rem 0 -0.25rem;
  }
`;

export const Title = styled.span`
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

type RelativeContainerProps = {
  rectangularImages?: boolean;
};

export const RelativeContainer = styled.div<RelativeContainerProps>`
  position: relative;
  display: flex;
  justify-content: center;

  & > img {
    width: 100%;
    object-fit: cover;
    ${({ rectangularImages }) =>
      rectangularImages &&
      css`
        aspect-ratio: 1 / 1;
      `}
  }
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 0.35rem;
`;

type RedFlagProps = {
  severity: 'two-weeks' | 'one-month';
};

export const RedFlag = styled.div<RedFlagProps>`
  position: absolute;
  background-color: ${({ severity, theme }) =>
    severity === 'two-weeks' ? theme.color.error : theme.color.error};
  padding: 0.25rem 1rem;
  top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const CountryFlag = styled.span`
  font-size: 1.5rem;
`;
