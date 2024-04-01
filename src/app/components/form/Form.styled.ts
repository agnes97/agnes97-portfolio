import { ColorTheme } from '@/app/providers/styled-components-provider';
import styled, { keyframes } from 'styled-components';

const rotatingStars = keyframes`
 to {
  transform: rotate(360deg);
}`;

type StyledFormProps = {
  currentTheme: ColorTheme;
};

export const StyledForm = styled.form<StyledFormProps>`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  & > fieldset {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    & > div {
      width: 100%;

      @media (width >= 740px) {
        width: 70%;
      }

      @media (width >= 1440px) {
        width: 40%;
      }
    }

    /* STARS FOCUS ANIMATION */
    &:focus-within::before,
    &:focus-within::after {
      content: '*';
      font-size: 2rem;
      line-height: 0;
      padding-top: 1rem;
      animation: ${rotatingStars} 1s ease-in-out infinite alternate;
      color: ${({ theme, currentTheme }) =>
        currentTheme === 'light'
          ? theme.color.background_secondary
          : theme.color.accent_dark};
    }

    &:focus-within::before {
      margin-right: 1rem;
    }

    &:focus-within::after {
      margin-left: 1rem;
    }
  }

  & textarea {
    resize: none;
    min-height: 10rem;
    padding: 1rem 3rem;
  }

  & input,
  & textarea {
    width: 100%;
    min-height: 3.5rem;
    padding: 0 3rem;
    margin: 0.5rem 0;
    background-color: ${({ theme }) => theme.color.glass_effect_background};
    border: 1px solid ${({ theme }) => theme.color.glass_effect_border};
    color: ${({ theme }) => theme.color.text_primary};

    &::placeholder {
      color: ${({ theme }) => theme.color.line_light};
      opacity: 1;
    }

    &:focus {
      outline: none;
      border: 1px solid
        ${({ theme, currentTheme }) =>
          currentTheme === 'light'
            ? theme.color.background_secondary
            : theme.color.accent_dark};
    }
  }
`;

export const ErrorContainer = styled.div`
  border: 2px solid ${({ theme }) => theme.color.glass_effect_border};
  background-color: ${({ theme }) => theme.color.error};
  display: flex;
  flex-direction: column;
  padding: 1rem;

  & > div {
    display: inline-flex;
    gap: 1rem;
  }
`;
