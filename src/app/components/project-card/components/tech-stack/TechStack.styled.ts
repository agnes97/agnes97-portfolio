import styled from 'styled-components';

export const TechStackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

  & svg {
    fill: ${({ theme }) => theme.color.line_light};

    &:hover {
      fill: ${({ theme }) => theme.color.text_primary};
    }
  }

  &::before {
    content: '[';
    padding-right: 0.35rem;
    color: ${({ theme }) => theme.color.line_dark};
    margin-top: -0.25rem;
  }

  &::after {
    content: ']';
    padding-left: 0.2rem;
    color: ${({ theme }) => theme.color.line_dark};
    margin-top: -0.25rem;
  }
`;
