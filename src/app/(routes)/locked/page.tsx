'use client';

import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import LoginForm from './components/LoginForm';

export default function Locked() {
  return (
    <>
      <LoginForm />

      <Divider />

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '10rem',
        }}
      >
        Secret content
      </div>
    </>
  );
}
