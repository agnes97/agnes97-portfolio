import React, { FC, PropsWithChildren } from 'react';
import { StyledTag } from './Tag.styled';

const Tag: FC<PropsWithChildren> = ({ children }) => (
  <StyledTag>{children}</StyledTag>
);

export default Tag;
