'use client';

import React, { FC, useEffect, useState } from 'react';
import { AnimatedHeading } from './PetProjects.styled';
import { PawPrint } from 'lucide-react';
import Flex from '../flex/Flex';

const PetProjects: FC = () => {
  const [hasAnimation, setHasAnimation] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        setHasAnimation((prev) => !prev);
      },
      hasAnimation ? 4000 : 1000
    );

    return () => {
      clearTimeout(timeout);
    };
  }, [hasAnimation]);

  return (
    <Flex
      flexDirection='column'
      justifyContent='start'
      alignItems='center'
      gap='2rem'
      minHeight='30rem'
      padding='5rem 0'
    >
      <AnimatedHeading hasAnimation={hasAnimation}>
        <PawPrint size={48} />
        <PawPrint size={48} />
        <h2>Pet Projects</h2>
        <PawPrint size={48} />
        <PawPrint size={48} />
      </AnimatedHeading>

      <p>...</p>
    </Flex>
  );
};

export default PetProjects;
