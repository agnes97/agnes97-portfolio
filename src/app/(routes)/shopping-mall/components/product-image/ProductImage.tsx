import React, { FC } from 'react';
import {
  AbsoluteContainer,
  RedFlag,
  RelativeContainer,
} from './ProductImage.styled';
import PriceTag from '../price-tag/PriceTag';

type Props = {
  price: number;
  currency: string;
  thumbnailSrc: string;
  lastOnlineDate: Date;
};

const today = new Date();
const twoWeeksAgoDate = new Date(new Date().setDate(today.getDate() - 14));
const monthAgoDate = new Date(new Date().setDate(today.getDate() - 30));

const ProductImage: FC<Props> = ({
  lastOnlineDate,
  thumbnailSrc,
  currency,
  price,
}) => {
  const wasLastOnlineTwoWeeksAgo =
    lastOnlineDate.getTime() < twoWeeksAgoDate.getTime();

  const wasLastOnlineMonthAgo =
    lastOnlineDate.getTime() < monthAgoDate.getTime();

  return (
    <RelativeContainer>
      {(wasLastOnlineTwoWeeksAgo || wasLastOnlineMonthAgo) && (
        <RedFlag
          severity={wasLastOnlineTwoWeeksAgo ? 'two-weeks' : 'one-month'}
        >
          <span>Last online:</span>
          <span>{lastOnlineDate.toLocaleDateString()}</span>
        </RedFlag>
      )}

      <img src={thumbnailSrc} width={200} />

      <AbsoluteContainer>
        <PriceTag>{`${price} ${currency}`}</PriceTag>
      </AbsoluteContainer>
    </RelativeContainer>
  );
};

export default ProductImage;
