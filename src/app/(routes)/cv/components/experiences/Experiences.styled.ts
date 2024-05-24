import Flex from '@/app/components/flex/Flex';
import { ColorTheme } from '@/app/providers/styled-components-provider';
import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled, { css } from 'styled-components';

export const ExperiencesContainer = styled(Flex)`
  padding: 3rem 0;
  width: 100%;

  & h3,
  & p {
    margin-block: 0;
  }

  & > :nth-child(2) {
    padding-bottom: 7rem;
    margin-bottom: 2.5rem;
    border-bottom: 2px dashed ${({ theme }) => theme.color.line_light};
    position: relative;

    &::before,
    &::after {
      position: absolute;
      color: ${({ theme }) => theme.color.line_light};
    }

    &::before {
      content: 'PROGRAMMING ↑';
      bottom: 0.5rem;
    }

    &::after {
      content: '↓ LIBRARIANSHIP';
      bottom: -1.75rem;
      right: 0;
    }
  }
`;

type ExperienceProps = {
  isLogoTooDark?: boolean;
};

export const Experience = styled.article<ExperienceProps>`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (width >= ${BREAKPOINTS.desktop}) {
    grid-template-columns: 1fr 4fr;
  }

  &:hover img {
    ${({ isLogoTooDark }) => css`
      filter: grayscale(0)
        ${isLogoTooDark ? 'brightness(200%)' : 'brightness(100%)'} invert(0);
    `}
  }
`;

type CompanyLogoProps = {
  currentTheme: ColorTheme;
};

export const CompanyLogo = styled.img<CompanyLogoProps>`
  object-fit: contain;
  filter: grayscale(0) brightness(0) invert(1);
  transition: filter 1s;
`;

type AccentedUppercaseProps = {
  isBold?: boolean;
  isUppercase?: boolean;
};

export const AccentedUppercase = styled.span<AccentedUppercaseProps>`
  color: ${({ theme }) => theme.color.accent_light};
  font-size: smaller;
  text-transform: ${({ isUppercase }) => (isUppercase ? 'uppercase' : 'none')};
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};

  @media (width >= ${BREAKPOINTS.ipad}) {
    font-size: large;
  }
`;

export const TechStackTitle = styled.span`
  font-style: italic;
  color: ${({ theme }) => theme.color.accent_light};
`;

export const PositionInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (width >= ${BREAKPOINTS.desktop}) {
    align-items: center;
  }
`;

export const DescriptionImageContainer = styled.div`
  padding-top: 1.5rem;

  & img {
    transition: filter 0.5s;
    filter: grayscale(100%) brightness(100%) invert(0);
  }
`;
