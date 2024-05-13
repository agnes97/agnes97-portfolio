import Flex from '@/app/components/flex/Flex';
import { ColorTheme } from '@/app/providers/styled-components-provider';
import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled from 'styled-components';

export const ExperiencesContainer = styled(Flex)`
  padding: 3rem 0;
  width: 100%;

  & h3,
  & p {
    margin-block: 0;
  }
`;

export const Experience = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (width >= ${BREAKPOINTS.ipad}) {
    grid-template-columns: 3fr 5fr;
  }

  &:hover img {
    filter: grayscale(0%) brightness(100%);
  }
`;

type CompanyLogoProps = {
  currentTheme: ColorTheme;
};

export const CompanyLogo = styled.img<CompanyLogoProps>`
  object-fit: contain;
  filter: grayscale(100%) brightness(130%);
`;
