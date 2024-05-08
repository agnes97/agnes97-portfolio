import React, { FC, MouseEvent, useRef, useState } from 'react';
import {
  BackgroundImage,
  BorderSides,
  Card,
  Content,
  Shadow,
} from './GalleryCard.styled';

type MousePosition = {
  x: number;
  y: number;
};

const maxRotationAngle = 0.5; // in rads

type GalleryCardProps = {
  cuttoutImageSrc: string;
  blurImageSrc: string;
  borderColors?: string[];
  transparentBorderSides?: BorderSides[];
};

const GalleryCard: FC<GalleryCardProps> = ({
  cuttoutImageSrc,
  blurImageSrc,
  borderColors,
  transparentBorderSides,
}) => {
  const initialMousePosition = { x: 0, y: 0 };
  const [mousePosition, setMousePosition] =
    useState<MousePosition>(initialMousePosition);

  const remap = (value: number, oldMax: number, newMax: number) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
  };

  const cardRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (event: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    // Count center:
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const positionY = event.clientX - centerX;
    const positionX = event.clientY - centerY;

    setMousePosition({
      y: remap(positionY, rect.width / 2, maxRotationAngle),
      x: -remap(positionX, rect.height / 2, maxRotationAngle),
    });
  };

  return (
    <Card
      ref={cardRef}
      onMouseOut={() => {
        setMousePosition(initialMousePosition);
      }}
      onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
        handleMouseMove(event);
      }}
      data-rotate-x={mousePosition.x}
      data-rotate-y={mousePosition.y}
      borderColors={borderColors ?? ['#dd7db7', '#87c8fd']}
      transparentBorderSides={transparentBorderSides ?? []}
    >
      <Shadow
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
        blurSrc={blurImageSrc}
      />
      <BackgroundImage
        data-type='background'
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
        data-cutout-src={cuttoutImageSrc}
        data-blur-src={blurImageSrc}
      />
      <BackgroundImage
        data-type='cutout'
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
        data-cutout-src={cuttoutImageSrc}
        data-blur-src={blurImageSrc}
      />
      <Content
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
      />
    </Card>
  );
};

export default GalleryCard;
