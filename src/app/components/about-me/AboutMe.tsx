'use client';

import { useTheme } from '@/app/providers/styled-components-provider';
import React, { FC } from 'react';
import { AboutMeContainer } from './AboutMe.styled';
import Link from 'next/link';
import Button from '../button/Button';
import GalleryCard from '../gallery-card/GalleryCard';
import { MousePointerClick } from 'lucide-react';

import agnes_light_cutout from '../../assets/gallery-cards/agnes-light-cutout.webp';
import agnes_light_blur from '../../assets/gallery-cards/agnes-light-blur.webp';
import agnes_dark_cutout from '../../assets/gallery-cards/agnes-dark-cutout.webp';
import agnes_dark_blur from '../../assets/gallery-cards/agnes-dark-blur.webp';
import Flex from '../flex/Flex';

const AboutMe: FC = () => {
  const { currentTheme, currentThemeVariant } = useTheme();

  const agnesCutout =
    currentThemeVariant === 'dark' ? agnes_dark_cutout : agnes_light_cutout;
  const agnesBlur =
    currentThemeVariant === 'dark' ? agnes_dark_blur : agnes_light_blur;

  const borderColors =
    currentThemeVariant === 'light'
      ? ['#dd7db7', '#87c8fd']
      : ['#27282c', '#22462f'];

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
            <Flex alignItems='center' gap='0.5rem'>
              <MousePointerClick color={currentTheme.color.text_link} />
              <span>VIEW CV</span>
            </Flex>
          </Button>
        </Link>
      </div>

      <div>
        <GalleryCard
          cuttoutImageSrc={agnesCutout.src}
          blurImageSrc={agnesBlur.src}
          borderColors={borderColors}
          transparentBorderSides={['left', 'top']}
        />
      </div>
    </AboutMeContainer>
  );
};

export default AboutMe;
