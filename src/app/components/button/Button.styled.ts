import styled, { css } from 'styled-components';

export type ButtonProps = {
    hasBorder?: boolean;
    borderColor?: string;
    size: "L" | "M" | "S";
}

const getButtonSize = (size: ButtonProps['size']) => {
    switch (size) {
        case "L": return "7rem";
        case 'M': return '5rem';
        case 'S': return '2.5rem';
        default: return '2.5rem';
    }
}

export const StyledButton = styled.button<ButtonProps>`
    all: unset;
    position: relative;
    cursor: pointer;

    ${props => `
        width: calc(3 / 4 * ${getButtonSize(props.size)});
        height: ${getButtonSize(props.size)};
    `}
    margin: 0 2rem;

    border-radius: 50%;
    box-shadow: 0 0 50px ${({ theme }) => theme.color.accent_light};
`

export const ButtonText = styled.span`
    z-index: 2;
    position: absolute;
    inset: 0;
    top: 0.5rem;
    left: -0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    color: white;
    line-height: 130%;
`

export const Hexagon = styled.div<ButtonProps>`
    display: block;
    position: absolute;
    inset: 0;
    
    border-radius: 15px;
    background-color: ${props => props.borderColor};
    backdrop-filter: blur(10%);

    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    text-align: center;

    ${props => `
        width: calc(3 / 4.5 * ${getButtonSize(props.size)});
        height: ${getButtonSize(props.size)};
    `}

    color: black;
    z-index: 1;

    ${props => props.hasBorder && `
        border-top: 2px solid ${props.borderColor};
        border-bottom: 2px solid ${props.borderColor};
    `}

    &::before, &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        background:inherit;
        border-radius:inherit;
        width: 100%;
        height: 100%;
    }

    &::before {
        transform: rotate(60deg);
    }

    &::after {
        content: "";
        transform: rotate(-60deg);
    }
`