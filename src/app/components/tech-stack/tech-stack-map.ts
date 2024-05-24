import {
  SiHtml5,
  SiCss3,
  SiGit,
  SiGithub,
  SiFirebase,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiFastify,
  SiPrisma,
  SiPostgresql,
  SiStyledcomponents,
  SiTailwindcss,
  SiNetlify,
  SiVercel,
  SiGooglecloud,
  SiJira,
  SiLinear,
  SiStorybook,
  SiYarn,
} from '@icons-pack/react-simple-icons';
import { LucideIcon } from 'lucide-react';

const tech = [
  'html',
  'css',
  'git',
  'github',
  'firebase',
  'javascript',
  'typescript',
  'react',
  'nextjs',
  'fastify',
  'prisma',
  'postgresql',
  'styled-components',
  'tailwindcss',
  'netlify',
  'vercel',
  'googlecloud',
  'jira',
  'linear',
  'storybook',
  'yarn',
] as const;

export type Tech = (typeof tech)[number];

type TechStackMap = {
  url: string;
  icon: LucideIcon;
};

export const techStackMap: Map<Tech, TechStackMap> = new Map([
  [
    'html',
    {
      url: 'https://html.spec.whatwg.org/multipage/',
      icon: SiHtml5,
    },
  ],
  [
    'css',
    {
      url: 'https://www.w3.org/Style/CSS/Overview.en.html',
      icon: SiCss3,
    },
  ],
  ['git', { url: 'https://git-scm.com/', icon: SiGit }],
  ['github', { url: 'https://github.com/', icon: SiGithub }],
  ['firebase', { url: 'https://firebase.google.com/', icon: SiFirebase }],
  ['javascript', { url: 'https://www.javascript.com/', icon: SiJavascript }],
  [
    'typescript',
    { url: 'https://www.typescriptlang.org/', icon: SiTypescript },
  ],
  ['react', { url: 'https://react.dev/', icon: SiReact }],
  ['nextjs', { url: 'https://nextjs.org/', icon: SiNextdotjs }],
  ['fastify', { url: 'https://fastify.dev/', icon: SiFastify }],
  ['prisma', { url: 'https://www.prisma.io/', icon: SiPrisma }],
  ['postgresql', { url: 'https://www.postgresql.org/', icon: SiPostgresql }],
  [
    'styled-components',
    { url: 'https://styled-components.com/', icon: SiStyledcomponents },
  ],
  ['tailwindcss', { url: 'https://tailwindcss.com/', icon: SiTailwindcss }],
  ['netlify', { url: 'https://www.netlify.com/', icon: SiNetlify }],
  ['vercel', { url: 'https://vercel.com/', icon: SiVercel }],
  ['googlecloud', { url: 'https://cloud.google.com/', icon: SiGooglecloud }],
  ['jira', { url: 'https://www.atlassian.com/software/jira', icon: SiJira }],
  ['linear', { url: 'https://linear.app/', icon: SiLinear }],
  ['storybook', { url: 'https://storybook.js.org/', icon: SiStorybook }],
  ['yarn', { url: 'https://yarnpkg.com/', icon: SiYarn }],
]);
