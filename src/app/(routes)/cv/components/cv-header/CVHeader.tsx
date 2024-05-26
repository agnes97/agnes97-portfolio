import GalleryCard from '@/app/components/gallery-card/GalleryCard';
import React, { FC, useEffect, useState } from 'react';
import { CVHeaderContainer, List } from './CVHeader.styled';

import cutout from '../../../../assets/gallery-cards/cv-cutout.png';
import blur from '../../../../assets/gallery-cards/cv-blur.jpg';

import { CV } from '../../hooks/use-get-cv';
import { replaceChars } from '../../utils/replace-chars';
import { updateStarOptions } from '../../utils/update-starred-options';
import Flex from '@/app/components/flex/Flex';
import { useTheme } from '@/app/providers/styled-components-provider';

export type HeaderCV = Omit<CV, 'experiences'>;
export type CVHeaderProperty = keyof HeaderCV;

type CVHeaderProps = {
  cv: HeaderCV;
};

const CVHeader: FC<CVHeaderProps> = ({ cv }) => {
  const { currentTheme } = useTheme();
  // GalleryCard
  const borderColors = [
    currentTheme.color.background_secondary,
    currentTheme.color.background_primary,
  ];

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
        cuttoutImageSrc={cutout.src}
        blurImageSrc={blur.src}
        borderColors={borderColors}
        transparentBorderSides={['left', 'top']}
      />
    </CVHeaderContainer>
  );
};

export default CVHeader;
