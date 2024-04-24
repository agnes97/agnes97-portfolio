'use client';

import React, { FC, useEffect, useState } from 'react';
import { AnimatedHeading, PetProjectsGrid } from './PetProjects.styled';
import { PawPrint } from 'lucide-react';
import Flex from '../flex/Flex';
import ProjectCard from '../project-card/ProjectCard';
import { projects } from './projects';

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
      gap='4rem'
      padding='5rem 0'
    >
      <AnimatedHeading hasAnimation={hasAnimation}>
        <PawPrint size={48} />
        <PawPrint size={48} />
        <h2>Pet Projects</h2>
        <PawPrint size={48} />
        <PawPrint size={48} />
      </AnimatedHeading>

      <PetProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            isCardFlippable={Boolean(project.vimeoVideoId)}
            key={project.id}
            order={index % 2 ? -1 : 0}
            {...project}
          />
        ))}
      </PetProjectsGrid>
    </Flex>
  );
};

export default PetProjects;
