'use client';

import styled, { css } from 'styled-components';
import { LinesProps } from './Lines';
import { FlexColumn, FlexRow } from '@/app/styles/global.styled';

type ContainerProps = {
  alignment: LinesProps['alignment'];
};

export const Container = styled.div<ContainerProps>`
  ${(props) =>
    props.alignment === 'vertical'
      ? css`
          ${FlexRow};
          width: 70%;
          position: absolute;
          inset: 0;
          margin: 0 auto;
        `
      : css`
          ${FlexColumn};
          width: 100%;
        `};
  gap: 0;
  padding: 0;

  @media (width >= 740px) {
    gap: 0.5rem;
    padding: 0.25rem 0;
  }
`;

type LineProps = {
  alignment: LinesProps['alignment'];
};

export const Line = styled.hr<LineProps>`
  border: 1px solid ${({ theme }) => theme.color.line_dark};
  margin-block: 0.25rem;

  @media (width >= 740px) {
    margin-block: 0.5rem;
  }

  ${(props) =>
    props.alignment === 'vertical' &&
    `
        height: 8rem;
        

        @media (min-width: 740px) {
            height: 18rem;
          }
    `}
`;
