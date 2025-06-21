import { Categories } from '../context/category-context';

export const countryFlag: { [key: string]: string } = {
  cz: '🇨🇿',
  pl: '🇵🇱',
  sk: '🇸🇰',
  uk: '🇬🇧',
  sc: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
};

export const categoryEmojis = new Map<keyof Categories, string>([
  ['czech', '🇨🇿'],
  ['polish', '🇵🇱'],
  ['parrot', '🦜'],
  ['sheep', '🐑'],
  ['make', '💜'],
  ['medicine', '🎀'],
  ['parfume', '✨'],
  ['slytherin', '🐍'],
  ['naruto', '🦊'],
  ['sunflower', '🌻'],
  ['puzzle', '🧩'],
  ['book', '📖'],
]);
