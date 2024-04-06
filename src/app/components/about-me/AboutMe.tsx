'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import { AboutMeContainer } from './AboutMe.styled';
import Link from 'next/link';
import Button from '../button/Button';
import GalleryCard from '../gallery-card/GalleryCard';

const AboutMe: FC = () => {
  const { currentThemeVariant } = useTheme();
  return (
    <AboutMeContainer currentTheme={currentThemeVariant}>
      <div>
        <p>
          In the ever-evolving tech realm, finding a proficient programmer who
          can breathe life into your ideas is crucial. I am committed to
          crafting user-friendly, captivating interfaces by transforming your
          vision into a pixel-perfect reality that drives results. Together,
          let's convert your project into a market-ready product.
        </p>

        <Link href='/cv' passHref>
          <Button shape='rectangle' size='L'>
            VIEW CV
          </Button>
        </Link>
      </div>

      <div>
        <GalleryCard />
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
