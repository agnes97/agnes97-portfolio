'use client';

import React, {
  ButtonHTMLAttributes,
  PropsWithChildren,
  forwardRef,
} from 'react';
import {
  ButtonProps,
  ButtonText,
  Hexagon,
  StyledButton,
} from './Button.styled';
import { useTheme } from '@/app/providers/styled-components-provider';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  size: ButtonProps['size'];
  shape: ButtonProps['shape'];
};

const Button = forwardRef<HTMLButtonElement, PropsWithChildren<Props>>(
  (props, ref) => {
    const { children, size, shape, ...rest } = props;

    const { currentTheme } = useTheme();

    return (
      <StyledButton
        ref={ref}
        size={size}
        shape={shape}
        {...rest}
        borderColor={currentTheme.color.accent_light}
      >
        <ButtonText shape={shape}>{children}</ButtonText>

        {shape === 'hexagon' && (
          <>
            <Hexagon
              shape='hexagon'
              size={size}
              borderColor={currentTheme.color.accent_light}
            />
            <Hexagon
              hasBorder
              borderColor={currentTheme.color.accent_light}
              shape='hexagon'
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
  }
);

export default Button;
