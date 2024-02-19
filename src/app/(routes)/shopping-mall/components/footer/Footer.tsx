import React, { FC } from 'react';
import { CountryFlag } from './Footer.styled';
import { countryFlag } from '../../utils/get-emojis';

type Props = {
  itemIndex: number;
  countryCode: string;
};

const Footer: FC<Props> = ({ itemIndex, countryCode }) => {
  return (
    <footer>
      <span>No. {itemIndex}</span>
      <CountryFlag>{countryFlag[countryCode.toLowerCase()]}</CountryFlag>
    </footer>
  );
};

export default Footer;
