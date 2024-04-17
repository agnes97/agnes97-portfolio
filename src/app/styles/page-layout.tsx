'use client';

import React, { FC, PropsWithChildren } from 'react';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import { Main } from './global.styled';
import Flex from '../components/flex/Flex';

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Main>
      <Header />
      <Flex
        flexDirection='column'
        gap='2rem'
        padding='2rem'
        flexGrow={1}
        width='100%'
        ipad={{ width: '80%' }}
      >
        {children}
      </Flex>
      <Footer />
    </Main>
  );
};

export default PageLayout;
