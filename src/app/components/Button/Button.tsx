"use client";

import React, { FC, PropsWithChildren } from "react";
import { ButtonProps, StyledButton } from "./Button.styled";

type Props = {
  size: ButtonProps["size"];
};

const Button: FC<PropsWithChildren<Props>> = ({ children, size }) => {
  return (
    <>
      <StyledButton size={size}>
        <span>{children}</span>
      </StyledButton>
    </>
  );
};

export default Button;
