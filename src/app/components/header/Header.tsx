'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import { StyledHeader, HeaderButton, ButtonContainer } from './Header.styled';
import Link from 'next/link';
import { Key, Moon, Sun } from 'lucide-react';

const iconSize = 32;

const Header: FC = () => {
  const { updateTheme, currentThemeVariant } = useTheme();

  return (
    <StyledHeader>
      <ButtonContainer>
        <HeaderButton
          color='link'
          style={{ gridColumn: 1, gridRow: 1 }}
          onClick={() => {
            updateTheme();
          }}
        >
          {currentThemeVariant === 'light' ? (
            <Moon size={iconSize} />
          ) : (
            <Sun size={iconSize} />
          )}
        </HeaderButton>

        <Link href='/locked' passHref style={{ gridColumn: 2, gridRow: 2 }}>
          <HeaderButton color='white'>
            <Key size={iconSize} />
          </HeaderButton>
        </Link>
      </ButtonContainer>

      <Link href='/'>
        <h1>Jana Mácová</h1>
      </Link>

      {/* <Rope /> */}
    </StyledHeader>
  );
};

export default Header;
