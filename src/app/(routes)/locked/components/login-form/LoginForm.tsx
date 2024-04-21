'use client';

import Form from '@/app/components/form/Form';
import {
  AccessTokenBody,
  useGetAccessToken,
} from '@/app/hooks/use-get-access-token';
import { useAuth } from '@/app/providers/auth-provider';
import React, { FC } from 'react';
import { z } from 'zod';

const loginForm = [
  {
    name: 'email',
    placeholder: 'Email',
    validation: z.string().email('Must be an email'),
  },
  {
    name: 'password',
    placeholder: 'Password',
    validation: z.string().min(8, 'Must be at least 8 characters'),
  },
];

const LoginForm: FC = () => {
  const { mutateAsync: getAccessToken } = useGetAccessToken();
  const { login } = useAuth();

  const handleSubmit = async (loginBody: AccessTokenBody) => {
    await getAccessToken(loginBody).then(login);
  };

  return <Form onSubmit={handleSubmit} formValues={loginForm} />;
};

export default LoginForm;
