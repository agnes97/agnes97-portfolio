'use client';

import Button from '@/app/components/button/Button';
import { useAuth } from '@/app/providers/auth-provider';
import React, { FC } from 'react';
import LoginForm from '../login-form/LoginForm';
import Flex from '@/app/components/flex/Flex';
import { useTheme } from '@/app/providers/styled-components-provider';

const Auth: FC = () => {
  const { user, isLoggedIn, logout } = useAuth();
  const { currentTheme, currentThemeVariant } = useTheme();

  return (
    <>
      <Flex
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        rowGap='0.25rem'
        paddingTop='2rem'
      >
        <h2>Auth</h2>
        <span
          style={{
            fontSize: 'smaller',
            color: currentTheme.color.accent_light,
          }}
        >
          &#91; for hidden projects and their administration &#93;
        </span>
      </Flex>

      {isLoggedIn && user ? (
        <Flex
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          gap='1rem'
        >
          <p>
            <span>You are logged in as:&nbsp;</span>
            <span
              style={{
                color:
                  currentThemeVariant === 'light'
                    ? currentTheme.color.background_secondary
                    : currentTheme.color.accent_light,
              }}
            >
              {user.name}
            </span>
          </p>
          <Button type='button' size={'L'} shape={'rectangle'} onClick={logout}>
            logout
          </Button>
        </Flex>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Auth;
