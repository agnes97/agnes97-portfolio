import React, { FC, KeyboardEvent, useState } from 'react';
import { ChevronRight, ChevronLeft, X } from 'lucide-react';
import { useModal } from '@/app/providers/modal-provider';
import { Gallery, NavButton } from './ImageGallery.styled';
import { useTheme } from '@/app/providers/styled-components-provider';

type ImageGalleryProps = {
  imgSrcs: string[];
  firstImgSrc?: string;
};

const iconProps = {
  size: 50,
  strokeWidth: 1.5,
};

const ImageGallery: FC<ImageGalleryProps> = ({ imgSrcs, firstImgSrc }) => {
  const { close } = useModal();
  const { currentThemeVariant } = useTheme();

  const findFirstImgIndex = (): number => {
    if (!firstImgSrc) return 0;

    return imgSrcs.findIndex((src) => src === firstImgSrc);
  };
  const [currentImgIndex, setCurrentImgIndex] = useState(findFirstImgIndex);

  const isFirstIndex = currentImgIndex === 0;
  const isLastIndex = currentImgIndex === imgSrcs.length - 1;

  const changeImage = (type: 'add' | 'subtract'): void => {
    if (type === 'add' && isLastIndex) return;
    if (type === 'subtract' && isFirstIndex) return;

    setCurrentImgIndex((prevIndex) =>
      type === 'add' ? prevIndex + 1 : prevIndex - 1
    );
  };

  const changeImageOnKeyDown = (
    keyDownEvent: KeyboardEvent<HTMLElement>
  ): void => {
    event?.preventDefault();
    if (!['ArrowRight', 'ArrowLeft'].includes(keyDownEvent.key)) return;

    changeImage(keyDownEvent.key === 'ArrowRight' ? 'add' : 'subtract');
  };

  return (
    <Gallery
      currentTheme={currentThemeVariant}
      onKeyDown={(keyDownEvent: KeyboardEvent<HTMLElement>) => {
        changeImageOnKeyDown(keyDownEvent);
      }}
    >
      <div>
        <img src={imgSrcs[currentImgIndex]} alt='' />
      </div>

      <NavButton
        currentTheme={currentThemeVariant}
        disabled={isFirstIndex}
        onClick={(event) => {
          event.preventDefault();
          changeImage('subtract');
        }}
        style={{ justifySelf: 'start' }}
      >
        <ChevronLeft {...iconProps} />
      </NavButton>

      <NavButton
        currentTheme={currentThemeVariant}
        autoFocus
        onClick={close}
        style={{ justifySelf: 'center' }}
      >
        <X {...iconProps} />
      </NavButton>

      <NavButton
        currentTheme={currentThemeVariant}
        disabled={isLastIndex}
        onClick={(event) => {
          event.preventDefault();
          changeImage('add');
        }}
        style={{ justifySelf: 'end' }}
      >
        <ChevronRight {...iconProps} />
      </NavButton>
    </Gallery>
  );
};

export default ImageGallery;
