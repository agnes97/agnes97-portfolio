import React, { FC, useRef, useState } from 'react';
import {
  AdditionalAnimatedImages,
  AnimationButton,
  DescriptionImageContainer,
} from '../Experiences.styled';
import PhotoAlbum from 'react-photo-album';
import { StaticImageData } from 'next/image';
import Flex from '@/app/components/flex/Flex';

type DescriptionImagesProps = {
  previewImages?: StaticImageData[];
  images: StaticImageData[];
};

const DescriptionImages: FC<DescriptionImagesProps> = ({
  previewImages,
  images,
}) => {
  const [areAllImagesVisible, setAreAllImagesVisible] = useState(false);

  const previewImagesArray = (previewImages ?? []).map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  }));

  const imagesArray = images.map((image) => ({
    src: image.src,
    width: image.width,
    height: image.height,
  }));

  const containerRef = useRef<HTMLDivElement | null>(null);

  const executeScroll = () => {
    containerRef.current?.scrollIntoView();
  };

  return (
    <DescriptionImageContainer ref={containerRef}>
      <PhotoAlbum
        spacing={10}
        layout='columns'
        columns={(containerWidth) => {
          if (containerWidth < 400) return 2;
          return 3;
        }}
        photos={previewImages ? previewImagesArray : imagesArray}
      />

      {previewImages && (
        <>
          {!areAllImagesVisible && (
            <Flex justifyContent='center' alignItems='center'>
              <AnimationButton
                areAllImagesVisible={areAllImagesVisible}
                onClick={() => {
                  setAreAllImagesVisible(true);
                }}
              >
                show more photos
              </AnimationButton>
            </Flex>
          )}

          <AdditionalAnimatedImages isAnimated={areAllImagesVisible}>
            <div style={{ overflow: 'hidden' }}>
              <PhotoAlbum
                spacing={10}
                layout='columns'
                columns={(containerWidth) => {
                  if (containerWidth < 400) return 2;
                  return 3;
                }}
                photos={imagesArray}
              />

              <Flex justifyContent='center' alignItems='center'>
                <AnimationButton
                  areAllImagesVisible={areAllImagesVisible}
                  onClick={() => {
                    setAreAllImagesVisible(false);
                    executeScroll();
                  }}
                >
                  oh no, that's too many, show less!
                </AnimationButton>
              </Flex>
            </div>
          </AdditionalAnimatedImages>
        </>
      )}
    </DescriptionImageContainer>
  );
};

export default DescriptionImages;
