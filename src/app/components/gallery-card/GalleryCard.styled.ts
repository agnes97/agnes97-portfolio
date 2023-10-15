import styled from 'styled-components';
import agnesCutout from '../../assets/agnes-cutout.png';
import agnesBg from '../../assets/agnes-bg.jpg';
import agnesBlur from '../../assets/agnes-blur.jpg';

const cardWidth = '15rem';

type CardDatasets = {
    ['data-rotate-x']?: number;
    ['data-rotate-y']?: number;
}

type BorderSides = 'top' | 'bottom' | 'left' | 'right';
type CardProps = CardDatasets & {
    borderColors: string[];
    transparentBorderSides: BorderSides[];
}

const smoothTransition = `transition: all 500ms linear;`

export const Card = styled.div.attrs<CardProps>((datasets: CardDatasets, props: CardProps) => ({
    props: props,
    style: {
        transform: `
            rotateX(${datasets['data-rotate-x']}rad) 
            rotateY(${datasets['data-rotate-y']}rad)
            translate3d(0, 0, 2rem)
            `,
        }
    }))`
    position: relative;
    width: ${cardWidth};
    height: 100%;
	aspect-ratio: 5 / 7;
	perspective: 50rem;
    ${smoothTransition};

    &::after,
	&::before {
		content: "";
		position: absolute;
		inset: 1.25rem;
        border: 0.25rem solid;
        border-image-slice: 1;
        border-width: 0.5rem;
        border-image-source: linear-gradient(to right, ${(props: CardProps) => props.borderColors.join(', ')});
	}

    &::before {
        ${props => props.transparentBorderSides && props.transparentBorderSides.length === 1 ? `
            border-${props.transparentBorderSides[0]}: transparent;
        ` : (
            props.transparentBorderSides.map((_, index) => 
                `border-${props.transparentBorderSides[index]}: transparent;`
        )
        )}
        
        z-index: 4;
    }
`

export const Shadow = styled.div.attrs((props: CardDatasets) => ({
    style: {
        transform: `rotateX(${props['data-rotate-x']}rad) rotateY(${props['data-rotate-y']}rad) translate3d(0, 2rem, -2rem)`
    }
}))`
    position: absolute;
    inset: 0;
    background: url(${agnesBlur.src});
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    filter: blur(2rem) saturate(0.9);
    ${smoothTransition};
`

type BackgroundImageProps = CardDatasets & {
    ['data-type']: 'background' | 'cutout';
}

export const BackgroundImage = styled.div.attrs((props: BackgroundImageProps) => ({
    style: {
        backgroundImage: props['data-type'] === 'background' 
                ? `linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 40%), url(${agnesBlur.src})` 
                : `url(${agnesCutout.src})`,
        maskImage: props['data-type'] === 'background' 
                ? `url(${agnesBlur.src})` 
                : `url(${agnesCutout.src})`,
        ...(props['data-type'] === 'background') ? { 
                transform: `
                    rotateX(${props['data-rotate-x']}rad) 
                    rotateY(${props['data-rotate-y']}rad)
                    translate3d(0, 0, 0rem)
                    `,
                filter: 'brightness(1)',
            } : { 
                transform: `
                    rotateX(${props['data-rotate-x']}rad) 
                    rotateY(${props['data-rotate-y']}rad)
                    translate3d(0, 0, 4rem) scale(0.92)
                    `,
                    zIndex: 3,
            },
    }
}))`
    position: absolute;
    inset: 0;
    background-size: cover;
    background-position: center;
    mask-size: cover;
    mask-position: center;
    ${smoothTransition};
`

export const Content = styled.div.attrs((datasets: CardDatasets) => ({
    style: {
        transform: `
            rotateX(${datasets['data-rotate-x']}rad) 
            rotateY(${datasets['data-rotate-y']}rad)
            translate3d(0, 0, 6rem)
            `,
    }
}))`
    position: absolute;
    inset: 0;
    z-index: 4;
    ${smoothTransition};
`