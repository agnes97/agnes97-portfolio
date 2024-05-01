'use client';

import Flex from '@/app/components/flex/Flex';
import Form from '@/app/components/form/Form';
import React, { FC, useState } from 'react';
import { z } from 'zod';
import { useGetAccessCode } from '../../hooks/use-get-access-code';

const accessForm = [
  {
    name: 'access_code',
    placeholder: 'Access Code',
    validation: z.string(),
  },
];

const AccessForm: FC = () => {
  const [accessCode, setAccessCode] = useState<string>();

  const { data: hasValidAccessCode } = useGetAccessCode(accessCode);

  const validateAccess = (accessCode: { access_code: string }) => {
    setAccessCode(accessCode['access_code']);
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
      <p>
        You can contact me to receive your access code for unlocking this
        section.
      </p>

      {hasValidAccessCode?.access_allowed ? (
        <p>Access Granted</p>
      ) : (
        <p>Access Denied</p>
      )}

      <Form onSubmit={validateAccess} formValues={accessForm}></Form>
    </Flex>
  );
};

export default AccessForm;
