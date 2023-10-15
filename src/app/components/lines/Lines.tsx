"use client";

import React, { FC } from "react";
import { Container, Line } from "./Lines.styled";

export type LinesProps = {
  numberOfLines: number;
  lengthAction: "decreases" | "increases";
  alignment?: "vertical" | "horizontal";
};

const percentualSizeIncrement = 5;

const Lines: FC<LinesProps> = ({ alignment, numberOfLines, lengthAction }) => {
  const linesArray = new Array(numberOfLines).fill(null);

  return (
    <Container alignment={alignment ?? "horizontal"}>
      {linesArray.map((_, index) => {
        const lineLengthIncreasing =
          100 - (numberOfLines - index - 1) * percentualSizeIncrement;
        const lineLengthDecreasing = 100 - index * percentualSizeIncrement;

        const lineLength =
          lengthAction === "increases"
            ? lineLengthIncreasing
            : lineLengthDecreasing;

        return alignment === "vertical" ? (
          <Line key={index} alignment={alignment ?? "horizontal"} />
        ) : (
          <Line
            key={index}
            alignment={alignment ?? "horizontal"}
            style={{ width: `${lineLength}%` }}
          />
        );
      })}
    </Container>
  );
};

export default Lines;
