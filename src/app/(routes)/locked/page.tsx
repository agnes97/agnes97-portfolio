'use client';

import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import SecretContent from './components/secret-content/SecretContent';
import AuthProvider from '@/app/providers/auth-provider';
import Auth from './components/auth/Auth';

export default function Locked() {
  return (
    <AuthProvider>
      <Auth />

      <Divider />

      <SecretContent />
    </AuthProvider>
  );
}
