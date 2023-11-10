"use client";

import React, { FC, PropsWithChildren } from "react";
import {
  ButtonProps,
  ButtonText,
  Hexagon,
  StyledButton,
} from "./Button.styled";
import { useTheme } from "@/app/providers/styled-components-provider";

type Props = {
  size: ButtonProps["size"];
  shape?: "hexagon";
};

const Button: FC<PropsWithChildren<Props>> = ({ children, size, shape }) => {
  const { currentTheme } = useTheme();

  return (
    <StyledButton size={size}>
      <ButtonText>{children}</ButtonText>

      {shape === "hexagon" && (
        <>
          <Hexagon size={size} borderColor={currentTheme.color.accent_light} />
          <Hexagon
            hasBorder
            borderColor={currentTheme.color.accent_light}
            size={size}
            style={{
              background: currentTheme.color.background_primary,
              opacity: 0.6,
            }}
          />
        </>
      )}
    </StyledButton>
  );
};

export default Button;
