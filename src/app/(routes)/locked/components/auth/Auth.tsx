'use client';

import Button from '@/app/components/button/Button';
import { useAuth } from '@/app/providers/auth-provider';
import React, { FC } from 'react';
import LoginForm from '../login-form/LoginForm';

const Auth: FC = () => {
  const { user, isLoggedIn, logout } = useAuth();

  return (
    <>
      {isLoggedIn && user ? (
        <div>
          You are logged in as: {user.name}
          <Button type='button' size={'L'} shape={'rectangle'} onClick={logout}>
            Logout
          </Button>
        </div>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default Auth;
