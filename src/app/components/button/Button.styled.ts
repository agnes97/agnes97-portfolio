import styled from 'styled-components';

export type ButtonProps = {
  hasBorder?: boolean;
  borderColor?: string;
  size: 'L' | 'M' | 'S';
  shape: 'hexagon' | 'rectangle';
};

const getButtonSize = (size: ButtonProps['size']) => {
  switch (size) {
    case 'L':
      return '7rem';
    case 'M':
      return '5rem';
    case 'S':
      return '2.5rem';
    default:
      return '2.5rem';
  }
};

export const StyledButton = styled.button<ButtonProps>`
  all: unset;
  position: relative;
  cursor: pointer;
  color: ${(props) => props.theme.color.text_primary};

  ${(props) =>
    props.shape === 'hexagon' &&
    `
        box-shadow: 0 0 50px ${props.theme.color.accent_light};
        width: calc(3 / 4 * ${getButtonSize(props.size)});
        height: ${getButtonSize(props.size)};
        margin: 0 2rem;
        border-radius: 50%;
    `}

  ${(props) =>
    props.shape === 'rectangle' &&
    `
        border: 2px solid ${props.theme.color.line_dark};
        padding: 1rem 1.5rem;
        min-width: ${getButtonSize(props.size)};
        background: ${props.theme.color.line_dark};

        letter-spacing: 0.1rem;
        transition: all 400ms linear;

        &:hover {
            letter-spacing: 0.25rem;
            color: ${props.theme.color.text_link}
        }
    `}
`;

type ButtonTextProps = {
  shape: ButtonProps['shape'];
};

export const ButtonText = styled.span<ButtonTextProps>`
  ${(props) =>
    props.shape === 'hexagon' &&
    `
        z-index: 2;
        position: absolute;
        inset: 0;
        top: 0.5rem;
        left: -0.5rem;
    `}

  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  line-height: 130%;
`;

export const Hexagon = styled.div<ButtonProps>`
  background-color: ${(props) => props.borderColor};
  backdrop-filter: blur(10%);
  display: block;
  position: absolute;
  inset: 0;
  border-radius: 15px;
  color: black;
  z-index: 1;

  ${(props) => `
        width: calc(3 / 4.5 * ${getButtonSize(props.size)});
        height: ${getButtonSize(props.size)};
    `}

  ${(props) =>
    props.hasBorder &&
    `
        border-top: 2px solid ${props.borderColor};
        border-bottom: 2px solid ${props.borderColor};
    `}

  &::before, &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: inherit;
    border-radius: inherit;
    width: 100%;
    height: 100%;
  }

  &::before {
    transform: rotate(60deg);
  }

  &::after {
    content: '';
    transform: rotate(-60deg);
  }
`;
