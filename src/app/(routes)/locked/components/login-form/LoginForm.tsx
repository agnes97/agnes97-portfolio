import HouseForm from '@/app/components/form/Form';
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
  return <HouseForm formValues={loginForm} />;
};

export default LoginForm;
