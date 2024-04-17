import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const Bar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 1rem;

  @media (width <= ${BREAKPOINTS.ipad}) {
    justify-content: end;
  }
`;

export const Total = styled.div`
  color: ${({ theme }) => theme.color.line_light};
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.color.text_primary};
`;

type FilterButtonProps = {
  isActive: boolean;
};

export const FilterButton = styled.button<FilterButtonProps>`
  all: unset;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: '{';
    color: ${({ isActive, theme }) =>
      isActive ? theme.color.text_primary : 'transparent'};
    font-size: 1.25rem;
    padding: 0.25rem;
  }

  &::after {
    content: '}';
    color: ${({ isActive, theme }) =>
      isActive ? theme.color.text_primary : 'transparent'};
    font-size: 1.25rem;
    padding: 0.25rem;
  }
`;
