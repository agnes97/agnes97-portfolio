import styled from 'styled-components';

export const Tag = styled.div`
  display: inline-block;
  width: auto;
  height: 2rem;
  background-color: ${({ theme }) => theme.color.background_primary};
  border-left: 1px solid ${({ theme }) => theme.color.background_primary};

  /* This makes room for the triangle */
  margin-left: 1.5rem;
  position: relative;
  color: ${({ theme }) => theme.color.text_primary};
  line-height: 2rem;
  padding: 0 0.75rem;

  /* Makes the triangle */
  &::before {
    content: '';
    position: absolute;
    display: block;
    left: -1.5rem;
    width: 0;
    height: 0;
    border-top: 1rem solid transparent;
    border-bottom: 1rem solid transparent;
    border-right: 1.5rem solid ${({ theme }) => theme.color.background_primary};
  }

  /* Makes the circle */
  &::after {
    content: '';
    background-color: ${({ theme }) => theme.color.accent_light};
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    display: block;
    position: absolute;
    left: -5px;
    top: 0.75rem;
  }
`;
