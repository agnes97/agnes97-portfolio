"use client";

import React, { FC, MouseEvent, useRef, useState } from "react";
import { BackgroundImage, Card, Content, Shadow } from "./GalleryCard.styled";

import agnes_light_cutout from "../../assets/agnes-light-cutout.png";
import agnes_light_blur from "../../assets/agnes-light-blur.jpg";
import agnes_dark_cutout from "../../assets/agnes-dark-cutout.png";
import agnes_dark_blur from "../../assets/agnes-dark-blur.jpg";
import { useTheme } from "@/app/providers/styled-components-provider";

type MousePosition = {
  x: number;
  y: number;
};

const maxRotationAngle = 0.5; // in rads

const GalleryCard: FC = () => {
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

  const { currentThemeVariant } = useTheme();
  const agnesCutout =
    currentThemeVariant === "dark" ? agnes_dark_cutout : agnes_light_cutout;
  const agnesBlur =
    currentThemeVariant === "dark" ? agnes_dark_blur : agnes_light_blur;

  return (
    <Card
      ref={cardRef}
      onMouseOut={() => {
        setMousePosition(initialMousePosition);
      }}
      onMouseMove={(event) => handleMouseMove(event)}
      data-rotate-x={mousePosition.x}
      data-rotate-y={mousePosition.y}
      borderColors={
        currentThemeVariant === "light"
          ? ["#dd7db7", "#87c8fd"]
          : ["#27282c", "#22462f"]
      }
      transparentBorderSides={["left", "top"]}
    >
      <Shadow
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
        blurSrc={agnesBlur.src}
      />
      <BackgroundImage
        data-type="background"
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
        data-cutout-src={agnesCutout.src}
        data-blur-src={agnesBlur.src}
      />
      <BackgroundImage
        data-type="cutout"
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
        data-cutout-src={agnesCutout.src}
        data-blur-src={agnesBlur.src}
      />
      <Content
        data-rotate-x={mousePosition.x}
        data-rotate-y={mousePosition.y}
      />
    </Card>
  );
};

export default GalleryCard;
