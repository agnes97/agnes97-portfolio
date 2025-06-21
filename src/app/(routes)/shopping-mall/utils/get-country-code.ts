import { franc } from 'franc-min';

export const getCountryCode = (title: string): string => {
  const probableCountry = franc(title, { only: ['ces', 'pol'] });

  let countryCode = '';
  switch (probableCountry) {
    case 'ces':
      countryCode = 'CZ';
      break;
    case 'pol':
      countryCode = 'PL';
      break;
    default:
      countryCode = '';
  }

  return countryCode;
};
