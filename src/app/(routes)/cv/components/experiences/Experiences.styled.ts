import Flex from '@/app/components/flex/Flex';
import { ColorTheme } from '@/app/providers/styled-components-provider';
import { BREAKPOINTS } from '@/app/styles/breakpoints';
import styled, { css } from 'styled-components';

type ExperiencesContainerProps = {
  programmingStartIndex: number;
};

export const ExperiencesContainer = styled(Flex)<ExperiencesContainerProps>`
  padding: 3rem 0;
  width: 100%;

  & h3,
  & p {
    margin-block: 0;
  }

  & > :nth-child(${({ programmingStartIndex }) => programmingStartIndex}) {
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

export const Experience = styled.article`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  &:hover img {
    filter: grayscale(0) invert(0);
  }

  @media (width >= ${BREAKPOINTS.desktop}) {
    grid-template-columns: 1fr 4fr;
  }
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

type PositionInfoWrapperProps = {
  isLogoTooDark?: boolean;
};

export const PositionInfoWrapper = styled.div<PositionInfoWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  @media (width >= ${BREAKPOINTS.desktop}) {
    align-items: center;
  }

  &:hover img {
    ${({ isLogoTooDark }) => css`
      filter: ${isLogoTooDark ? 'brightness(200%)' : 'brightness(100%)'}
        invert(0);
    `}
  }
`;

type CompanyLogoProps = {
  currentTheme: ColorTheme;
};

export const CompanyLogo = styled.img<CompanyLogoProps>`
  object-fit: contain;
  filter: brightness(0) invert(1);
  transition: filter 500ms ease-in-out;
`;

export const DescriptionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 1.5rem;

  & img {
    transition: filter 0.5s;
    filter: grayscale(100%);
  }
`;

export const DescriptionList = styled.ul`
  padding-inline-start: 1.5rem;
  margin-block: 0;
  list-style: none;

  & > li::before {
    content: '~';
    color: ${({ theme }) => theme.color.accent_light};
    font-weight: bolder;
    display: inline-block;
    padding-right: 0.75rem;
  }
`;

type AdditionalAnimatedImagesProps = {
  isAnimated: boolean;
};

export const AdditionalAnimatedImages = styled.div<AdditionalAnimatedImagesProps>`
  display: grid;
  grid-template-rows: ${({ isAnimated }) => (isAnimated ? '1fr' : '0fr')};
  transition: grid-template-rows 2s linear;
`;

type AnimationButtonProps = {
  areAllImagesVisible: boolean;
};

export const AnimationButton = styled.button<AnimationButtonProps>`
  all: unset;
  cursor: pointer;
  color: ${({ theme }) => theme.color.accent_light};
  font-weight: bold;
  text-transform: uppercase;
  font-size: smaller;
  font-style: italic;
  ${({ areAllImagesVisible }) =>
    areAllImagesVisible &&
    css`
      padding-top: 1rem;
    `}

  &::before, &::after {
    content: '~';
    padding: 0 0.5rem;
  }

  @media (width <= ${BREAKPOINTS.ipad}) {
    max-width: 50%;
    text-align: center;
  }

  @media (width <= ${BREAKPOINTS.mobile}) {
    max-width: 90%;
  }
`;
