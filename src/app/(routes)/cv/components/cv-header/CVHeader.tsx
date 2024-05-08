import GalleryCard from '@/app/components/gallery-card/GalleryCard';
import React, { FC } from 'react';
import { CVHeaderContainer, List, ListContainer } from './CVHeader.styled';
import { useTheme } from '@/app/providers/styled-components-provider';

import agnes_light_cutout from '../../../../assets/agnes-light-cutout.png';
import agnes_light_blur from '../../../../assets/agnes-light-blur.jpg';
import agnes_dark_cutout from '../../../../assets/agnes-dark-cutout.png';
import agnes_dark_blur from '../../../../assets/agnes-dark-blur.jpg';

const CVHeader: FC = () => {
  const { currentThemeVariant } = useTheme();

  const agnesCutout =
    currentThemeVariant === 'dark' ? agnes_dark_cutout : agnes_light_cutout;
  const agnesBlur =
    currentThemeVariant === 'dark' ? agnes_dark_blur : agnes_light_blur;

  const borderColors =
    currentThemeVariant === 'light'
      ? ['#dd7db7', '#87c8fd']
      : ['#27282c', '#22462f'];

  return (
    <CVHeaderContainer
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      minHeight='10rem'
      gap='2.5rem'
      paddingTop='1.5rem'
      ipad={{
        flexDirection: 'row',
      }}
      desktop={{
        gap: '5rem',
      }}
    >
      <ListContainer flexDirection='column' gap='3rem' flexGrow={1}>
        <List>
          <li>
            <span>Name and surname:</span>
            <span>Jana Mácová</span>
          </li>
          <li>
            <span>Date of birth:</span>
            <span>✶✶.&nbsp;&nbsp;✶✶.&nbsp;&nbsp;✶✶✶✶</span>
          </li>
          <li>
            <span>Address:</span>
            <span>
              ✶✶✶✶✶✶✶✶✶&nbsp;&nbsp;✶✶✶✶ <br />
              ✶✶✶✶✶✶✶✶✶✶&nbsp;&nbsp;✶✶✶&nbsp;&nbsp;✶✶✶✶✶✶ <br />
              ✶✶✶&nbsp;&nbsp;✶✶ <br />
            </span>
          </li>
        </List>

        <List>
          <li>
            <span>Phone number:</span>
            <span>✶✶✶&nbsp;&nbsp;✶✶✶&nbsp;&nbsp;✶✶✶&nbsp;&nbsp;✶✶✶</span>
          </li>
          <li>
            <span>E-mail:</span>
            <span>✶✶✶✶@✶✶✶✶✶✶.✶✶✶✶</span>
          </li>
        </List>
      </ListContainer>

      <GalleryCard
        cuttoutImageSrc={agnesCutout.src}
        blurImageSrc={agnesBlur.src}
        borderColors={borderColors}
        transparentBorderSides={['left', 'top']}
      />
    </CVHeaderContainer>
  );
};

export default CVHeader;
