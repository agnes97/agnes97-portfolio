import GalleryCard from '@/app/components/gallery-card/GalleryCard';
import React, { FC, useEffect, useState } from 'react';
import { CVHeaderContainer, List } from './CVHeader.styled';
import { useTheme } from '@/app/providers/styled-components-provider';

import agnes_light_cutout from '../../../../assets/agnes-light-cutout.png';
import agnes_light_blur from '../../../../assets/agnes-light-blur.jpg';
import agnes_dark_cutout from '../../../../assets/agnes-dark-cutout.png';
import agnes_dark_blur from '../../../../assets/agnes-dark-blur.jpg';
import { CV } from '../../hooks/use-get-cv';
import { replaceChars } from '../../utils/replace-chars';
import { updateStarOptions } from '../../utils/update-starred-options';
import Flex from '@/app/components/flex/Flex';

export type HeaderCV = Omit<CV, 'experiences'>;
export type CVHeaderProperty = keyof HeaderCV;

type CVHeaderProps = {
  cv: HeaderCV;
};

const CVHeader: FC<CVHeaderProps> = ({ cv }) => {
  // GalleryCard
  const { currentThemeVariant } = useTheme();

  const agnesCutout =
    currentThemeVariant === 'dark' ? agnes_dark_cutout : agnes_light_cutout;
  const agnesBlur =
    currentThemeVariant === 'dark' ? agnes_dark_blur : agnes_light_blur;

  const borderColors =
    currentThemeVariant === 'light'
      ? ['#dd7db7', '#87c8fd']
      : ['#27282c', '#22462f'];

  // CV animation logic
  const [currentCvState, setCurrentCvState] = useState<HeaderCV>(cv);

  const updateCvState = (
    property: CVHeaderProperty,
    value: number,
    newWord: string
  ) => {
    setCurrentCvState((prev) => ({
      ...prev,
      [property]: [
        prev[property].slice(0, value),
        newWord.split('')[value],
        prev[property].slice(value + 1),
      ].join(''),
    }));
  };

  // Keep starred options up to date
  const [starredOptions, setStarredOptions] = useState(
    updateStarOptions(currentCvState)
  );

  useEffect(() => {
    setStarredOptions(updateStarOptions(currentCvState));
  }, [currentCvState]);

  // Replace chars in the accessed CV
  useEffect(() => {
    if (starredOptions.length > 0) {
      starredOptions.map((key) => {
        replaceChars(key, currentCvState[key], cv[key], updateCvState);
      });
    }
  }, [starredOptions.length, cv]);

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
      <Flex flexDirection='column' gap='3rem' flexGrow={1}>
        <List>
          <li>
            <span>Name and surname:</span>
            <span>{currentCvState.name}</span>
          </li>
          <li>
            <span>Date of birth:</span>
            <span>{currentCvState.date_of_birth}</span>
          </li>
          <li>
            <span>Address:</span>
            <span>
              {currentCvState.address_street}
              <br />
              {currentCvState.address_city}
              <br />
              {currentCvState.address_zip}
            </span>
          </li>
        </List>

        <List>
          <li>
            <span>Phone number:</span>
            <span>{currentCvState.phone_number}</span>
          </li>
          <li>
            <span>E-mail:</span>
            <span>{currentCvState.email}</span>
          </li>
        </List>
      </Flex>

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
