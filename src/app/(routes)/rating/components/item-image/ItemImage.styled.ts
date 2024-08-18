import styled from 'styled-components';

export const ItemImageContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  & > svg {
    display: none;
  }

  &:hover {
    & > svg {
      display: block;
      position: absolute;
      z-index: 1;
    }

    & > img {
      filter: brightness(50%);
    }
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;
