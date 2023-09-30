import { GlassEffect } from '@/app/styles/global.styled';
import styled from 'styled-components';

export type ButtonProps = {
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
    display: block;
    position: relative;
    cursor: pointer;
    border-radius: 15px;
    background-color: rgba(255, 255, 255, 1);
    backdrop-filter: blur(10%);
    border-top: 2px solid rgba(255, 255, 255, 1);
    border-bottom: 2px solid rgba(255, 255, 255, 1);

    margin: 0 auto;
    text-align: center;
    color: black;
    z-index: 1;

    ${props => `
        width: calc(3 / 4.5 * ${getButtonSize(props.size)});
        height: ${getButtonSize(props.size)};
    `}

    &::before, &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        background:inherit;
        border-radius:inherit;
        width: 100%;
        height: 100%;
        z-index: -1;
        border-top: 2px solid rgb(255, 255, 255);
        border-bottom: 2px solid rgb(255, 255, 255);
    }

    &::before {
        transform: rotate(60deg);
    }

    &::after {
        content: "";
        transform: rotate(-60deg);
    }
`