'use client';

import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import LoginForm from './components/login-form/LoginForm';
import SecretContent from './components/secret-content/SecretContent';
import Button from '@/app/components/button/Button';
import { useAuth } from '@/app/providers/auth-provider';

export default function Locked() {
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

      <Divider />

      <SecretContent />
    </>
  );
}
