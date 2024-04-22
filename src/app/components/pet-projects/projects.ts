import { Project } from '../project-card/ProjectCard';

import birthday_boi from '../../assets/projects/birthday-boi.png';
import budget_budgie_cutout from '../../assets/projects/budget-budgie.png';
import portfolio from '../../assets/projects/portfolio.png';
import prismify from '../../assets/projects/prismify.png';
import wedding from '../../assets/projects/wedding.jpg';

export const projects: Project[] = [
  {
    id: 'portfolio',
    title: 'Portfolio',
    description: '~ this project ~',
    githubRepoUrl: 'https://github.com/agnes97/agnes97-portfolio',
    thumbnailSrc: portfolio.src,
    isThumbnailTransparent: true,
  },
  {
    id: 'prismify',
    title: 'Prismify',
    description:
      'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.',
    githubRepoUrl: 'https://github.com/agnes97/prismify',
    url: 'https://prismify.macovi.space',
    thumbnailSrc: prismify.src,
  },
  {
    id: 'budget_budgie',
    title: 'Budget Budgie',
    description: 'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit.',
    githubRepoUrl: 'https://github.com/agnes97/budget-budgie',
    url: 'https://budget-budgie.netlify.app/',
    thumbnailSrc: budget_budgie_cutout.src,
    isThumbnailTransparent: true,
  },
  {
    id: 'birthday_boi',
    title: 'Birthday Boi',
    description:
      'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet.',
    githubRepoUrl: 'https://github.com/agnes97/birthday-boi',
    url: 'https://birthday-boi.netlify.app/',
    thumbnailSrc: birthday_boi.src,
    vimeoVideoId: '936767946',
    backBackgroundColor: '#2b2b2b',
  },
  {
    id: 'wedding',
    title: '<Wedding>',
    description:
      'Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet. Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Lorem Ipsum Dolor Sit Amet.',
    githubRepoUrl: 'https://github.com/out-fox-it/wedding',
    url: 'https://wedding.macovi.space/',
    thumbnailSrc: wedding.src,
  },
];
