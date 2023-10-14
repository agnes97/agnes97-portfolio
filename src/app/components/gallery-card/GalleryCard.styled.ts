import styled from 'styled-components';
import agnesCutout from '../../assets/agnes-cutout.png';
import agnesBg from '../../assets/agnes-bg.jpg';

const cardWidth = '15rem';

export const Card = styled.div`
    position: relative;
    width: ${cardWidth};
    height: 100%;
	aspect-ratio: 5 / 7;
	perspective: 50rem;
`

type CardDatasets = {
    ['data-rotate-x']?: number;
    ['data-rotate-y']?: number;
}

export const Shadow = styled.div.attrs((props: CardDatasets) => ({
    style: {
        transform: `rotateX(${props['data-rotate-x']}rad) rotateY(${props['data-rotate-y']}rad) translate3d(0, 2rem, -2rem)`
    }
}))`
    position: absolute;
    inset: 0;
    width: ${cardWidth};
    height: 100%;
    background: url('https://i.ibb.co/PM4ghD4/full.png');
    background-size: cover;
    background-position: center;
    opacity: 0.8;
    filter: blur(2rem) saturate(0.9);
    box-shadow: 0 -1.5rem 2rem -0.5rem rgba(0, 0, 0, 0.7);
`

type BackgroundImageProps = CardDatasets & {
    ['data-type']: 'background' | 'cutout';
}

export const BackgroundImage = styled.img.attrs<BackgroundImageProps>((props: BackgroundImageProps) => ({
    style: {
        backgroundImage: `
            linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent 40%),
            ${props['data-type'] === 'background' 
                ? `url(${agnesBg.src})` 
                : `url(${agnesCutout.src})`}
            `,
        ...(props['data-type'] === 'background') ? { 
                transform: `
                    rotateX(${props['data-rotate-x']}rad) 
                    rotateY(${props['data-rotate-y']}rad)
                    translate3d(0, 0, 0rem)
                    `,
                filter: 'blur(10px) brightness(1)',
            } : { 
                transform: `
                    rotateX(${props['data-rotate-x']}rad) 
                    rotateY(${props['data-rotate-y']}rad)
                    translate3d(0, 0, 4rem) scale(0.92)
                    `, 
                zIndex: 5,
            },
    }
}))`
    position: absolute;
    inset: 0;
    width: ${cardWidth};
    height: 100%;
    background-size: cover;
    background-position: center;
`

type ContentProps = {
    borderColors: string[];
}

export const Content = styled.div.attrs<ContentProps>((datasets: CardDatasets, props: ContentProps) => ({
    props: props,
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

    &::before {
		z-index: 4;
        border-left: transparent;
	}

	&::after,
	&::before {
		content: "";
		position: absolute;
		inset: 2rem;
        border: 0.5rem solid;
        border-image-slice: 1;
        border-width: 0.35rem;
        border-image-source: linear-gradient(to right, ${(props: ContentProps) => props.borderColors.join(', ')});
	}
`