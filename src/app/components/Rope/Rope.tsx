"use client";

import React, { FC, useEffect, useRef } from "react";
import Script from "next/script";

import { drawRopeOnCanvas } from "./draw-rope";
import { Canvas } from "./Rope.styled";

const Rope: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    drawRopeOnCanvas(canvas);
  }, []);

  return (
    <>
      <Script src="paper-core.min.js" strategy="beforeInteractive" />
      <Canvas ref={canvasRef} width={400} height={300} />
    </>
  );
};

export default Rope;
