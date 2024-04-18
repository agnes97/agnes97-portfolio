import styled, { css } from 'styled-components';

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.4s;
  transform-style: preserve-3d;
  box-shadow: 0 2px 4px 0 ${(props) => props.theme.color.background_primary};
  border: 0.25rem solid ${(props) => props.theme.color.line_dark};
  background-color: ${(props) => props.theme.color.background_primary};
`;

export const Card = styled.div`
  height: 300px;
  perspective: 1000px;

  ${Content}:hover {
    transform: rotateY(180deg);
  }

  & p,
  & h3 {
    margin-block: 0;
  }
`;

export const bothSidesStyles = css`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

export const Front = styled.div`
  ${bothSidesStyles};
`;

export const Back = styled.div`
  ${bothSidesStyles};
  transform: rotateY(180deg);
`;

export const Thumbnail = styled.div`
  width: calc(100% / 3);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
