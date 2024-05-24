import React, { FC } from 'react';
import { DescriptionImageContainer } from '../Experiences.styled';
import PhotoAlbum from 'react-photo-album';
import { StaticImageData } from 'next/image';

type DescriptionImagesProps = {
  images: StaticImageData[];
};

const DescriptionImages: FC<DescriptionImagesProps> = ({ images }) => {
  const imagesArray = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  }));

  return (
    <DescriptionImageContainer>
      <PhotoAlbum
        spacing={10}
        layout='columns'
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          return 3;
        }}
        photos={imagesArray}
      />
    </DescriptionImageContainer>
  );
};

export default DescriptionImages;
