'use client';

import React, { FC, useEffect, useState } from 'react';
import { AnimatedHeading, Container } from './PetProjects.styled';
import { PawPrint } from 'lucide-react';

const PetProjects: FC = () => {
  const [hasAnimation, setHasAnimation] = useState(true);

  console.log(hasAnimation);

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
    <Container>
      <AnimatedHeading hasAnimation={hasAnimation}>
        <PawPrint size={48} />
        <PawPrint size={48} />
        <h2>Pet Projects</h2>
        <PawPrint size={48} />
        <PawPrint size={48} />
      </AnimatedHeading>

      <p>...</p>
    </Container>
  );
};

export default PetProjects;
