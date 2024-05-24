import Flex from '@/app/components/flex/Flex';
import React, { FC } from 'react';
import { DescriptionImage } from '../Experiences.styled';

type DescriptionImagesProps = {
  companyName: string;
  imagesSrcs: string[];
};

const DescriptionImages: FC<DescriptionImagesProps> = ({
  companyName,
  imagesSrcs,
}) => {
  return (
    <Flex gap='0.25rem' flexWrap='wrap'>
      {imagesSrcs.map((src, index) => (
        <DescriptionImage
          key={index}
          width={100}
          height={100}
          src={src}
          alt={companyName}
        />
      ))}
    </Flex>
  );
};

export default DescriptionImages;
