import { Project } from '../project-card/ProjectCard';

import birthday_boi from '../../assets/projects/birthday-boi.webp';
import budget_budgie_cutout from '../../assets/projects/budget-budgie.webp';
import portfolio from '../../assets/projects/portfolio.webp';
import prismify from '../../assets/projects/prismify.webp';
import wedding from '../../assets/projects/wedding.webp';
import czechitas_advanced_typescript from '../../assets/projects/czechitas-advanced-typescript.webp';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description:
      'You are here! My portfolio serves both as a presentation of my work and as a playground for further learning and silly ideas. It was the first place where I tried Next.js App Router and much more.',
    techStack: ['typescript', 'react', 'nextjs', 'styled-components', 'vercel'],
    githubRepoUrl: 'https://github.com/agnes97/agnes97-portfolio',
    thumbnailSrc: portfolio.src,
    isThumbnailTransparent: true,
  },
  {
    id: 'prismify',
    title: 'Prismify API',
    description:
      'This project lives on on Vercel as a serverless function and I use it as a general backend for all my personal projects. Main tech stack is a combination of Fastify and Prisma with PosgtgreSQL database.',
    techStack: ['typescript', 'fastify', 'prisma', 'postgresql', 'vercel'],
    githubRepoUrl: 'https://github.com/agnes97/prismify',
    url: 'https://prismify.macovi.space',
    thumbnailSrc: prismify.src,
  },
  {
    id: 'wedding',
    title: '<Wedding>',
    description:
      'We first build this project with wedding invitation in mind but currently it just points to a gallery and video evidence of our vows. :)',
    techStack: ['react', 'nextjs', 'typescript', 'tailwindcss', 'vercel'],
    githubRepoUrl: 'https://github.com/out-fox-it/wedding',
    url: 'https://wedding.macovi.space/',
    thumbnailSrc: wedding.src,
  },
  {
    id: 'birthday_boi',
    title: 'Birthday Boi',
    description:
      'I made this React game in December 2021, as a birthday present for my wonderful husband. The goal is simple - to jump over all the birthday candles rushing towards you.',
    techStack: ['typescript', 'react', 'styled-components', 'netlify'],
    githubRepoUrl: 'https://github.com/agnes97/birthday-boi',
    url: 'https://birthday-boi.netlify.app/',
    thumbnailSrc: birthday_boi.src,
    vimeoVideoId: '936767946',
    backBackgroundColor: '#2b2b2b',
  },
  {
    id: 'budget_budgie',
    title: 'Budget Budgie',
    description:
      'When you need an app to track your family budget, this project is here for you. Just log in with your gmail account and add your income and expenses - your balance will be calculated for you. Build with React and Firebase, lives on Netlify.',
    techStack: [
      'firebase',
      'typescript',
      'react',
      'styled-components',
      'netlify',
    ],
    githubRepoUrl: 'https://github.com/agnes97/budget-budgie',
    url: 'https://budget-budgie.netlify.app/',
    thumbnailSrc: budget_budgie_cutout.src,
    isThumbnailTransparent: true,
  },
  {
    id: 'czechitas_advanced_typescript',
    title: 'Advanced Typescript',
    description:
      'Lesson for Czechitas and their "React 2" course. I\'ve decided on the subject, made the materials in a form of this project, and then taught it during the course in June 2024.',
    techStack: ['javascript', 'typescript', 'react', 'html', 'css', 'vercel'],
    githubRepoUrl: 'https://github.com/agnes97/czechitas-advanced-typescript',
    url: 'https://czechitas-advanced-typescript.vercel.app/',
    thumbnailSrc: czechitas_advanced_typescript.src,
  },
];
