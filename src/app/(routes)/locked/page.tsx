'use client';

import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import LoginForm from './components/login-form/LoginForm';
import SecretContent from './components/secret-content/SecretContent';

export default function Locked() {
  return (
    <>
      <LoginForm />

      <Divider />

      <SecretContent />
    </>
  );
}
