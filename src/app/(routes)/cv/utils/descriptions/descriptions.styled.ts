import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const DescriptionImage = styled.img`
  object-fit: cover;
  filter: grayscale(100%);

  &:hover {
    width: auto;
    filter: grayscale(0);
  }

  @media (width <= ${BREAKPOINTS.ipad}) {
    width: 350px;
    height: 70px;

    &:hover {
      width: 350px;
      height: auto;
      filter: grayscale(0);
    }
  }
`;
