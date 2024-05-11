'use client';

import Flex from '@/app/components/flex/Flex';
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

  return (
    <Flex
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='10rem'
      flexGrow={1}
      width='100%'
    >
      <h2>Experiences</h2>

      {/* {hasValidAccessCode?.access_allowed ? (
        <p>Access Granted</p>
      ) : (
        <p>Access Denied</p>
      )} */}

      <Form onSubmit={onSubmit} formValues={accessForm}></Form>
    </Flex>
  );
};

export default AccessForm;
