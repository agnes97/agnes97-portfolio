'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import { Wrapper } from './GithubContributions.styled';

const lightThemeSrc =
  'https://raw.githubusercontent.com/agnes97/agnes97/master/profile-3d-contrib/portfolio-light-theme.svg';
const darkThemeSrc =
  'https://raw.githubusercontent.com/agnes97/agnes97/master/profile-3d-contrib/portfolio-dark-theme.svg';

const GithubContributions: FC = () => {
  const { currentThemeVariant } = useTheme();

  return (
    <Wrapper>
      <img
        src={currentThemeVariant === 'dark' ? darkThemeSrc : lightThemeSrc}
        alt=''
      />
    </Wrapper>
  );
};

export default GithubContributions;
