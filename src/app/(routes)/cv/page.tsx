'use client';

import Flex from '@/app/components/flex/Flex';
import { Divider } from '@/app/styles/global.styled';
import React from 'react';

export default function Cv() {
  return (
    <>
      <Flex justifyContent='center' alignItems='center' minHeight='10rem'>
        Header
      </Flex>

      <Divider />

      <Flex
        justifyContent='center'
        alignItems='center'
        minHeight='10rem'
        flexGrow={1}
      >
        Secret Info
      </Flex>

      <Divider />

      <Flex justifyContent='center' alignItems='center' minHeight='10rem'>
        Footer
      </Flex>
    </>
  );
}
