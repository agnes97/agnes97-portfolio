import { Item } from '../types';

export type Word =
  | 'parrot'
  | 'sheep'
  | 'make'
  | 'slytherin'
  | 'naruto'
  | 'sunflower'
  | 'puzzle'
  | 'book';

const words: Map<Word, string[]> = new Map([
  ['parrot', ['parrot', 'papouš', 'papug', 'pták']],
  ['sheep', ['sheep', 'ovc', 'ovečk', 'owieczk']],
  ['make', ['fialov', 'růžov', 'lila', 'fioletow', 'różow']],
  ['slytherin', ['slytherin', 'zmijozel', 'harry', 'potter', 'wąż']],
  [
    'naruto',
    ['lišk', 'fox', 'liski', 'naruto', 'hinata', 'tsunade', 'anime', 'kyubi'],
  ],
  ['sunflower', ['sunflower', 'slunečnic', 'słoneczniki', 'sloneczniki']],
  ['puzzle', ['puzzle']],
  ['book', ['book', 'fairyloot', 'knih', 'read', 'edycja']],
]);

// 'description' was removed from endpoint after June 2025
const places = ['title'] as const;

export const getWordCategories = (item: Item) =>
  Array.from(words.entries()).reduce<Word[]>(
    (categories, [wordCategory, words]) => {
      if (
        words.some((word) =>
          places.some((place) => item[place].toLowerCase().includes(word))
        )
      )
        categories.push(wordCategory);
      return categories;
    },
    []
  );
