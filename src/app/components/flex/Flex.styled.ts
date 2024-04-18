import styled, { css } from 'styled-components';
import { FlexProps } from './Flex';
import { BREAKPOINTS } from '@/app/styles/breakpoints';

export const Box = styled.div<Partial<FlexProps>>`
  display: flex;

  ${({ areAllChildrenEqual }) =>
    areAllChildrenEqual &&
    css`
      & > * {
        flex: 1;
      }
    `};

  ${({ alignItems }) => alignItems && `align-items: ${alignItems};`};
  ${({ justifyContent }) =>
    justifyContent && `justify-content: ${justifyContent};`};
  ${({ flexDirection }) =>
    flexDirection && `flex-direction: ${flexDirection};`};
  ${({ flexWrap }) => flexWrap && `flex-wrap: ${flexWrap};`};
  ${({ gap }) => gap && `gap: ${gap};`};
  ${({ columnGap }) => columnGap && `column-gap: ${columnGap};`};
  ${({ rowGap }) => rowGap && `row-gap: ${rowGap};`};
  ${({ padding }) => padding && `padding: ${padding};`};
  ${({ paddingTop }) => paddingTop && `padding-top: ${paddingTop};`};
  ${({ paddingRight }) => paddingRight && `padding-right: ${paddingRight};`};
  ${({ paddingBottom }) =>
    paddingBottom && `padding-bottom: ${paddingBottom};`};
  ${({ paddingLeft }) => paddingLeft && `padding-left: ${paddingLeft};`};
  ${({ width }) => width && `width: ${width};`};
  ${({ minHeight }) => minHeight && `min-height: ${minHeight};`};
  ${({ flexGrow }) => flexGrow && `flex-grow: ${flexGrow};`};
  ${({ flexShrink }) => flexShrink && `flex-shrink: ${flexShrink};`};

  ${({ mobile }) =>
    mobile &&
    css`
      ${mobile.alignItems && `align-items: ${mobile.alignItems};`}
      ${mobile.justifyContent && `justify-content: ${mobile.justifyContent};`}
      ${mobile.flexDirection && `flex-direction: ${mobile.flexDirection};`}
      ${mobile.flexWrap && `flex-wrap: ${mobile.flexWrap};`}
      ${mobile.gap && `gap: ${mobile.gap};`}
      ${mobile.columnGap && `column-gap: ${mobile.columnGap};`}
      ${mobile.rowGap && `row-gap: ${mobile.rowGap};`}
      ${mobile.padding && `padding: ${mobile.padding};`}
      ${mobile.paddingTop && `padding-top: ${mobile.paddingTop};`}
      ${mobile.paddingRight && `padding-right: ${mobile.paddingRight};`}
      ${mobile.paddingBottom && `padding-bottom: ${mobile.paddingBottom};`}
      ${mobile.paddingLeft && `padding-left: ${mobile.paddingLeft};`}
      ${mobile.width && `width: ${mobile.width};`}
      ${mobile.minHeight && `min-height: ${mobile.minHeight};`}
      ${mobile.flexGrow && `flex-grow: ${mobile.flexGrow};`}
      ${mobile.flexShrink && `flex-shrink: ${mobile.flexShrink};`}
    `};

  ${({ ipad }) =>
    ipad &&
    css`
      @media (width >= ${BREAKPOINTS.ipad}) {
        ${ipad.alignItems && `align-items: ${ipad.alignItems};`}
        ${ipad.justifyContent && `justify-content: ${ipad.justifyContent};`}
        ${ipad.flexDirection && `flex-direction: ${ipad.flexDirection};`}
        ${ipad.flexWrap && `flex-wrap: ${ipad.flexWrap};`}
        ${ipad.gap && `gap: ${ipad.gap};`}
        ${ipad.columnGap && `column-gap: ${ipad.columnGap};`}
        ${ipad.rowGap && `row-gap: ${ipad.rowGap};`}
        ${ipad.padding && `padding: ${ipad.padding};`}
        ${ipad.paddingTop && `padding-top: ${ipad.paddingTop};`}
        ${ipad.paddingRight && `padding-right: ${ipad.paddingRight};`}
        ${ipad.paddingBottom && `padding-bottom: ${ipad.paddingBottom};`}
        ${ipad.paddingLeft && `padding-left: ${ipad.paddingLeft};`}
        ${ipad.width && `width: ${ipad.width};`}
        ${ipad.minHeight && `min-height: ${ipad.minHeight};`}
        ${ipad.flexGrow && `flex-grow: ${ipad.flexGrow};`}
        ${ipad.flexShrink && `flex-shrink: ${ipad.flexShrink};`}
      }
    `};

  ${({ desktop }) =>
    desktop &&
    css`
      @media (width >= ${BREAKPOINTS.desktop}) {
        ${desktop.alignItems && `align-items: ${desktop.alignItems};`}
        ${desktop.justifyContent &&
        `justify-content: ${desktop.justifyContent};`}
        ${desktop.flexDirection && `flex-direction: ${desktop.flexDirection};`}
        ${desktop.flexWrap && `flex-wrap: ${desktop.flexWrap};`}
        ${desktop.gap && `gap: ${desktop.gap};`}
        ${desktop.columnGap && `column-gap: ${desktop.columnGap};`}
        ${desktop.rowGap && `row-gap: ${desktop.rowGap};`}
        ${desktop.padding && `padding: ${desktop.padding};`}
        ${desktop.paddingTop && `padding-top: ${desktop.paddingTop};`}
        ${desktop.paddingRight && `padding-right: ${desktop.paddingRight};`}
        ${desktop.paddingBottom && `padding-bottom: ${desktop.paddingBottom};`}
        ${desktop.paddingLeft && `padding-left: ${desktop.paddingLeft};`}
        ${desktop.width && `width: ${desktop.width};`}
        ${desktop.minHeight && `min-height: ${desktop.minHeight};`}
        ${desktop.flexGrow && `flex-grow: ${desktop.flexGrow};`}
        ${desktop.flexShrink && `flex-shrink: ${desktop.flexShrink};`}
      }
    `};
`;
