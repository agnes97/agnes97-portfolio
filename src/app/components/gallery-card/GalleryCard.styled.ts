import styled, { css } from 'styled-components';
import agnesCutout from '../../assets/agnes-cutout.png';
import agnesBg from '../../assets/agnes-bg.jpg';

export const Card = styled.div`
    position: relative;
    width: 15rem;
	aspect-ratio: 5 / 7;
	color: #ffffff;
	perspective: 50rem;
`

type CardProps = {
    rotatex?: number;
    rotatey?: number;
}

export const Shadow = styled.div.attrs(({ rotatex, rotatey }: CardProps) => ({
    rotatex: rotatex,
    rotatey: rotatey
}))`
    position: absolute;
    inset: 0;
    width: 15rem;
    height: 100%;
    background: url('https://i.ibb.co/PM4ghD4/full.png');
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    filter: blur(2rem) saturate(0.9);
    box-shadow: 0 -1.5rem 2rem -0.5rem rgba(0, 0, 0, 0.7);
    ${props => props.rotatex || props.rotatey && css`
        transform: rotateX(${props.rotatex}rad) rotateY(${props.rotatey}rad)
            translate3d(0, 2rem, -2rem);
    `}
`

type BackgroundImageProps = CardProps & {
    type: 'background' | 'cutout';
}

export const BackgroundImage = styled.img.attrs(({ rotatex, rotatey, type }: BackgroundImageProps) => ({
    rotatex: rotatex,
    rotatey: rotatey,
    type: type,
}))`
    position: absolute;
    inset: 0;
    width: 15rem;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 40%),
        ${props => props.type === 'background' ? `url(${agnesBg.src})` : `url(${agnesCutout.src})`};
    background-size: cover;
    background-position: center;
    mask-image: ${props => props.type === 'background' ? `url(${agnesBg.src})` : `url(${agnesCutout.src})`};;
    mask-size: cover;
    mask-position: center;

    ${props => props.type === 'background' ? `
        transform: rotateX(${props.rotatex}rad) rotateY(${props.rotatey}rad)
            translate3d(0, 0, 0rem);
            filter: blur(10px) brightness(1);
    ` : `
        transform: rotateX(${props.rotatex}rad) rotateY(${props.rotatey}rad)
            translate3d(0, 0, 4rem) scale(0.92);
        z-index: 5;
    `}
`

type ContentProps = CardProps & {
    borderColor: string[];
}

export const Content = styled.div.attrs(({ rotatex, rotatey, borderColor }: ContentProps) => ({
    rotatex: rotatex,
    rotatey: rotatey,
    borderColor: borderColor
}))`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    inset: 0;
    padding: 3.5rem;

    ${props => props.rotatex || props.rotatey && css`
        transform: rotateX(${props.rotatex}rad) rotateY(${props.rotatey}rad)
            translate3d(0, 0, 6rem);
    `}
    z-index: 4;
    &::before {
		z-index: 4;
        border-left: transparent;
	}

	&::after,
	&::before {
		content: "";
		position: absolute;
		inset: 1.5rem;
        border: 0.5rem solid;
        border-image-slice: 1;
        border-width: 0.5rem;
        border-image-source: linear-gradient(to right, ${props => props.borderColor.join(', ')});
        
        ${props => (props.rotatex || props.rotatey) && css`
            transform: rotateX(${props.rotatex}rad) rotateY(${props.rotatey}rad) translate3d(0, 0, 2rem);
        `}
		
	}
`