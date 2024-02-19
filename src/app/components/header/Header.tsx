'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import Rope from '../rope/Rope';
import { StyledHeader, ThemeButton } from './Header.styled';
import Link from 'next/link';

const Header: FC = () => {
  const { updateTheme } = useTheme();

  return (
    <StyledHeader>
      <div>
        <ThemeButton onClick={() => updateTheme()}>change theme</ThemeButton>
        <div>buttons</div>
      </div>
      <Link href='/'>
        <h1>Jana Mácová</h1>
      </Link>

      {/* <Rope /> */}
    </StyledHeader>
  );
};

export default Header;
