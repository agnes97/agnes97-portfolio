'use client';

import Form from '@/app/components/form/Form';
import React, { FC } from 'react';
import { z } from 'zod';

const accessForm = [
  {
    name: 'accessCode',
    placeholder: 'Access Code',
    validation: z.string(),
  },
];

type AccessFormProps = {
  accessCv: (accessCode: string) => void;
};

const AccessForm: FC<AccessFormProps> = ({ accessCv }) => {
  const onSubmit = (values: { accessCode: string }) => {
    accessCv(values.accessCode);
  };

  return <Form onSubmit={onSubmit} formValues={accessForm}></Form>;
};

export default AccessForm;
