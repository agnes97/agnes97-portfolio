'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import { Wrapper } from './GithubContributions.styled';
import Flex from '../flex/Flex';
import { ExternalLink } from '@/app/styles/global.styled';

const lightThemeSrc =
  'https://raw.githubusercontent.com/agnes97/agnes97/master/profile-3d-contrib/portfolio-light-theme.svg';
const darkThemeSrc =
  'https://raw.githubusercontent.com/agnes97/agnes97/master/profile-3d-contrib/portfolio-dark-theme.svg';

const GithubContributions: FC = () => {
  const { currentThemeVariant } = useTheme();

  return (
    <Wrapper>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        rowGap='0.25rem'
      >
        <h2>GitHub Contributions</h2>
        <ExternalLink
          href='https://github.com/agnes97'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          &#91; SEE MORE &#93;
        </ExternalLink>
      </Flex>

      <img
        src={currentThemeVariant === 'dark' ? darkThemeSrc : lightThemeSrc}
        alt='GitHub Contributions'
      />
    </Wrapper>
  );
};

export default GithubContributions;
