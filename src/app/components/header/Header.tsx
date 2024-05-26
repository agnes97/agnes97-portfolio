'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import { StyledHeader, HeaderButton, ButtonContainer } from './Header.styled';
import Link from 'next/link';
import { Home, Key, Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation';

const iconSize = 32;

const Header: FC = () => {
  const { updateTheme, currentThemeVariant, currentTheme } = useTheme();
  const pathname = usePathname();

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

        {pathname === '/locked' ? (
          <Key
            color={currentTheme.color.background_primary}
            size={iconSize}
            style={{ gridColumn: 2, gridRow: 2 }}
          />
        ) : (
          <Link href='/locked' passHref style={{ gridColumn: 2, gridRow: 2 }}>
            <HeaderButton color='white'>
              <Key size={iconSize} />
            </HeaderButton>
          </Link>
        )}
      </ButtonContainer>

      <Link href='/'>
        {pathname === '/cv' ? (
          <Home size={50} strokeWidth={1.5} />
        ) : (
          <h2>Jana Mácová</h2>
        )}
      </Link>

      {/* <Rope /> */}
    </StyledHeader>
  );
};

export default Header;
