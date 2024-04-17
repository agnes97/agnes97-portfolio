'use client';

import React, {
  HTMLAttributes,
  PropsWithChildren,
  forwardRef,
  CSSProperties,
} from 'react';
import { Box } from './Flex.styled';

type DisplayFlex = {
  alignItems?: CSSProperties['alignItems'];
  justifyContent?: CSSProperties['justifyContent'];
  flexDirection?: CSSProperties['flexDirection'];
  flexWrap?: CSSProperties['flexWrap'];
  columnGap?: string;
  rowGap?: string;
  gap?: string;
  padding?: CSSProperties['padding'];
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  width?: string;
  minHeight?: string;
  flexGrow?: CSSProperties['flexGrow'];
  flexShrink?: CSSProperties['flexShrink'];
};

export type FlexProps = HTMLAttributes<HTMLDivElement> &
  DisplayFlex & {
    mobile?: DisplayFlex;
    ipad?: DisplayFlex;
    desktop?: DisplayFlex;
  };

const Flex = forwardRef<HTMLDivElement, PropsWithChildren<FlexProps>>(
  (props, ref) => {
    const { children, ...rest } = props;

    return (
      <Box ref={ref} {...rest}>
        {children}
      </Box>
    );
  }
);

export default Flex;
