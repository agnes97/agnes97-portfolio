import { Item } from '../types';
import { getCountryCode } from '../utils/get-country-code';

export type Country = 'czech' | 'polish';

export const getCountryCategories = ({ title }: Item) => {
  const categories: Country[] = [];
  const countryCode = getCountryCode(title);

  if (countryCode === 'CZ') categories.push('czech');
  if (countryCode === 'PL') categories.push('polish');

  return categories;
};
