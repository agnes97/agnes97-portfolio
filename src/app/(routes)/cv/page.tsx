'use client';

import Flex from '@/app/components/flex/Flex';
import { Divider } from '@/app/styles/global.styled';
import React from 'react';
import AccessForm from './components/access-form/AccessForm';

export default function Cv() {
  return (
    <>
      <Flex justifyContent='center' alignItems='center' minHeight='10rem'>
        Header
      </Flex>

      <Divider />

      <AccessForm />

      <Divider />

      <Flex justifyContent='center' alignItems='center' minHeight='10rem'>
        Footer
      </Flex>
    </>
  );
}
