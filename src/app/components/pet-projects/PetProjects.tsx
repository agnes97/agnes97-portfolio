'use client';

import React, { FC, useEffect, useState } from 'react';
import {
  AnimatedHeading,
  PetProjectsContainer,
  PetProjectsGrid,
} from './PetProjects.styled';
import { PawPrint } from 'lucide-react';
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
    <PetProjectsContainer>
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
    </PetProjectsContainer>
  );
};

export default PetProjects;
