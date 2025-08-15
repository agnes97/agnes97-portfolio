'use client';

import React from 'react';
import Auth from './components/auth/Auth';
import { Divider } from '@/app/styles/global.styled';
import SecretContent from './components/secret-content/SecretContent';
import { useAuth } from '@/app/providers/auth-provider';

export default function Locked() {
  const { user, isLoggedIn } = useAuth();

  return (
    <>
      <Auth />

      {isLoggedIn && user && (
        <>
          <Divider />
          <SecretContent />
        </>
      )}
    </>
  );
}
