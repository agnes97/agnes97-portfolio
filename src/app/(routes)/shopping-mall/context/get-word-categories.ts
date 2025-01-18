import { Item } from '../types';

export type Word =
  | 'parrot'
  | 'sheep'
  | 'hourglass'
  | 'slytherin'
  | 'fox'
  | 'sunflower'
  | 'puzzle'
  | 'larp';

const words: Map<Word, string[]> = new Map([
  ['parrot', ['parrot', 'papoušek', 'papoušci', 'papuga', 'papugi', 'ptáků']],
  ['sheep', ['sheep', 'ovce', 'ovečka', 'owieczka', 'owieczki']],
  ['hourglass', ['klepsydra', 'přesýpací']],
  ['slytherin', ['slytherin', 'zmijozel', 'harry', 'potter', 'wąż']],
  ['fox', ['liška', 'fox', 'lišky', 'liski']],
  ['sunflower', ['sunflower', 'slunečnice', 'słoneczniki']],
  ['puzzle', ['puzzle']],
  [
    'larp',
    [
      'gorset',
      'corset',
      'larp',
      'goth',
      'gothic',
      'medieval',
      'cosplay',
      'kostium',
      'kostým',
    ],
  ],
]);

const places = ['title', 'description'] as const;

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
