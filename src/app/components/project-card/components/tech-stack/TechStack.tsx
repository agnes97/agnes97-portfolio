import React, { FC } from 'react';

import SiFastify from '@icons-pack/react-simple-icons/icons/SiFastify';
import SiPrisma from '@icons-pack/react-simple-icons/icons/SiPrisma';
import SiPostgresql from '@icons-pack/react-simple-icons/icons/SiPostgresql';
import { Project } from '../../ProjectCard';
import { TechStackContainer } from './TechStack.styled';
import {
  SiNextdotjs,
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiFirebase,
  SiNetlify,
  SiVercel,
  SiTailwindcss,
} from '@icons-pack/react-simple-icons';

type TechStackProps = {
  techStack: Project['techStack'];
};

const iconSize = 18;

const TechStack: FC<TechStackProps> = ({ techStack }) => {
  return (
    <TechStackContainer>
      {techStack.includes('firebase') && (
        <a
          href='https://firebase.google.com/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiFirebase size={iconSize} />
        </a>
      )}

      {techStack.includes('typescript') && (
        <a
          href='https://www.typescriptlang.org/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiTypescript size={iconSize} />
        </a>
      )}

      {techStack.includes('react') && (
        <a
          href='https://react.dev/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiReact size={iconSize} />
        </a>
      )}

      {techStack.includes('nextjs') && (
        <a
          href='https://nextjs.org/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiNextdotjs size={iconSize} />
        </a>
      )}

      {techStack.includes('fastify') && (
        <a
          href='https://fastify.dev/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiFastify size={iconSize} />
        </a>
      )}

      {techStack.includes('prisma') && (
        <a
          href='https://www.prisma.io/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiPrisma size={iconSize} />
        </a>
      )}

      {techStack.includes('postgresql') && (
        <a
          href='https://www.postgresql.org/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiPostgresql size={iconSize} />
        </a>
      )}

      {techStack.includes('styled-components') && (
        <a
          href='https://styled-components.com/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiStyledcomponents size={iconSize + 7} />
        </a>
      )}

      {techStack.includes('tailwindcss') && (
        <a
          href='https://tailwindcss.com/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiTailwindcss size={iconSize + 7} />
        </a>
      )}

      {techStack.includes('netlify') && (
        <a
          href='https://www.netlify.com/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiNetlify size={iconSize} />
        </a>
      )}

      {techStack.includes('vercel') && (
        <a
          href='https://vercel.com/'
          referrerPolicy='no-referrer'
          target='_blank'
        >
          <SiVercel size={iconSize} />
        </a>
      )}
    </TechStackContainer>
  );
};

export default TechStack;
