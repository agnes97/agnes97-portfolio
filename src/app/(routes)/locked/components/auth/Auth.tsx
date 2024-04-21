'use client';

import Button from '@/app/components/button/Button';
import { useAuth } from '@/app/providers/auth-provider';
import React, { FC } from 'react';
import LoginForm from '../login-form/LoginForm';

const Auth: FC = () => {
  const { user, isLoading, logout } = useAuth();

  return (
    <>
      {!isLoading &&
        (user ? (
          <Button type='button' size={'L'} shape={'rectangle'} onClick={logout}>
            Logout
          </Button>
        ) : (
          <LoginForm />
        ))}
    </>
  );
};

export default Auth;
