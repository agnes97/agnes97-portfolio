import React, { FC, PropsWithChildren } from 'react';
import { Tag } from './PriceTag.styled';

const PriceTag: FC<PropsWithChildren> = ({ children }) => <Tag>{children}</Tag>;

export default PriceTag;
