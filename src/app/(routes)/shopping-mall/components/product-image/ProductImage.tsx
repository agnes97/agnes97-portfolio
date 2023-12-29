import React, { FC } from "react";
import { AbsoluteContainer, RelativeContainer } from "./ProductImage.styled";
import PriceTag from "../price-tag/PriceTag";

type Props = {
  price: number;
  currency: string;
  thumbnailSrc: string;
};

const ProductImage: FC<Props> = ({ thumbnailSrc, currency, price }) => {
  return (
    <RelativeContainer>
      <img src={thumbnailSrc} width={200} />

      <AbsoluteContainer>
        <PriceTag>{`${price} ${currency}`}</PriceTag>
      </AbsoluteContainer>
    </RelativeContainer>
  );
};

export default ProductImage;
