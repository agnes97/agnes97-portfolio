"use client";

import React, { FC, MouseEvent, useEffect, useRef, useState } from "react";
import { BackgroundImage, Card, Content, Shadow } from "./GalleryCard.styled";
import { css } from "styled-components";

type MousePosition = {
  x: number;
  y: number;
};

const maxRotationAngle = 0.5; // in rads

const GalleryCard: FC = () => {
  const initialMousePosition = { x: 0, y: 0 };
  const [mousePosition, setMousePosition] =
    useState<MousePosition>(initialMousePosition);

  const cardRef = useRef<HTMLDivElement>(null);
  const card = cardRef.current;

  const lerp = (start: number, end: number, amount: number) => {
    return (1 - amount) * start + amount * end;
  };

  const remap = (value: number, oldMax: number, newMax: number) => {
    const newValue = ((value + oldMax) * (newMax * 2)) / (oldMax * 2) - newMax;
    return Math.min(Math.max(newValue, -newMax), newMax);
  };

  const handleMouseMove = (event: MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;

    // Count center:
    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const posX = event.pageX - centerX;
    const posY = event.pageY - centerY;

    setMousePosition({
      x: remap(posX, rect.width / 2, maxRotationAngle),
      y: -remap(posY, rect.height / 2, maxRotationAngle),
    });
  };

  useEffect(() => {
    if (!card) return;

    let currentX = parseFloat(
      card.style.getPropertyValue("--rotateY").slice(0, -1)
    );
    let currentY = parseFloat(
      card.style.getPropertyValue("--rotateX").slice(0, -1)
    );
    if (isNaN(currentX)) currentX = 0;
    if (isNaN(currentY)) currentY = 0;

    const x = lerp(currentX, mousePosition.x, 0.05);
    const y = lerp(currentY, mousePosition.y, 0.05);

    setMousePosition({ x, y });
  }, []);

  const pseudoElementsStyles = `
    color: blue;

    &::after,
    &::before {
      content: "";
      position: absolute;
      inset: 1.5rem;
      border: 0.5rem solid;
      border-image-slice: 1;
      border-width: 0.5rem;
      border-image-source: linear-gradient(to right, red, blue);
    }
  `;

  return (
    <Card
      ref={cardRef}
      onMouseOut={() => {
        setMousePosition(initialMousePosition);
      }}
      onMouseMove={(event) => handleMouseMove(event)}
      data-rotate-x={mousePosition.y}
      data-rotate-y={mousePosition.x}
    >
      <Shadow data-rotate-x={mousePosition.y} data-rotate-y={mousePosition.x} />
      <BackgroundImage
        data-type="background"
        data-rotate-x={mousePosition.y}
        data-rotate-y={mousePosition.x}
      />
      <BackgroundImage
        data-type="cutout"
        data-rotate-x={mousePosition.y}
        data-rotate-y={mousePosition.x}
      />
      <Content
        data-rotate-x={mousePosition.y}
        data-rotate-y={mousePosition.x}
        borderColors={["#dd7db7", "#87c8fd"]}
      />
    </Card>
  );
};

export default GalleryCard;
