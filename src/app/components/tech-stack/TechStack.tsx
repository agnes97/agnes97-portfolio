import React, { FC } from 'react';
import { Project } from '../project-card/ProjectCard';
import { TechStackContainer } from './TechStack.styled';
import { techStackMap } from './tech-stack-map';

type TechStackProps = {
  techStack: Project['techStack'];
};

const iconSize = 18;

const TechStack: FC<TechStackProps> = ({ techStack }) => {
  return (
    <TechStackContainer>
      {techStack.map((tech) => {
        const techValue = techStackMap.get(tech);
        if (!techValue) return null;

        const Icon = techValue.icon;

        return (
          <a
            href={techValue.url}
            referrerPolicy='no-referrer'
            target='_blank'
            title={tech}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </TechStackContainer>
  );
};

export default TechStack;
