'use client';

import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import SecretContent from './components/secret-content/SecretContent';
import Auth from './components/auth/Auth';

export default function Locked() {
  return (
    <>
      <Auth />

      <Divider />

      <SecretContent />
    </>
  );
}
