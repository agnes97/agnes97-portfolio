"use client";

import React, { FC, MouseEvent, useRef, useState } from "react";
import { BackgroundImage, Card, Content, Shadow } from "./GalleryCard.styled";

type MousePosition = {
  x: number;
  y: number;
};

const GalleryCard: FC = () => {
  const initialMousePosition = { x: 0, y: 0 };
  const [mousePosition, setMousePosition] =
    useState<MousePosition>(initialMousePosition);

  const cardRef = useRef<HTMLDivElement>(null);
  const angle = 5; // in rads

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

    const rect = card.getBoundingClientRect();
    const centerX = (rect.left + rect.right) / 2;
    const centerY = (rect.top + rect.bottom) / 2;
    const posX = event.pageX - centerX;
    const posY = event.pageY - centerY;
    const x = remap(posX, rect.width / 2, angle);
    const y = remap(posY, rect.height / 2, angle);
    card.dataset.rotateX = x.toLocaleString();
    card.dataset.rotateY = (-y).toLocaleString();
  };

  const update = () => {
    const card = cardRef.current;
    if (!card) return;

    let currentX = parseFloat(
      card.style.getPropertyValue("--rotateY").slice(0, -1)
    );
    let currentY = parseFloat(
      card.style.getPropertyValue("--rotateX").slice(0, -1)
    );
    if (isNaN(currentX)) currentX = 0;
    if (isNaN(currentY)) currentY = 0;
    const x = lerp(currentX, Number(card.dataset.rotateX), 0.05);
    const y = lerp(currentY, Number(card.dataset.rotateY), 0.05);
    setMousePosition({ x, y });
  };

  setInterval(update, 1000 / 60);

  return (
    <Card
      ref={cardRef}
      onMouseOut={() => {
        setMousePosition(initialMousePosition);
        console.log("mouse out");
      }}
      onMouseMove={(event) => handleMouseMove(event)}
    >
      <Shadow rotatex={mousePosition.y} rotatey={mousePosition.x} />
      <BackgroundImage
        type="background"
        rotatex={mousePosition.y}
        rotatey={mousePosition.x}
      />
      <BackgroundImage
        type="cutout"
        rotatex={mousePosition.y}
        rotatey={mousePosition.x}
      />
      <Content
        rotatex={mousePosition.y}
        rotatey={mousePosition.x}
        borderColor={["#dd7db7", "#87c8fd"]}
      />
    </Card>
  );
};

export default GalleryCard;
