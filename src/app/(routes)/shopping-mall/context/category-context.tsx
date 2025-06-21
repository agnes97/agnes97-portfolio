import { ReactNode, createContext, useContext, useMemo } from 'react';
import { Item } from '../types';
import data from '../data.json';
import { Brand, getBrandCategories } from './get-brand-categories';
import { Country, getCountryCategories } from './get-country-categories';
import { Word, getWordCategories } from './get-word-categories';

export type Categories = Record<Country, Item[]> &
  Record<Word, Item[]> &
  Record<Brand, Item[]>;

export const initialCategories: Categories = {
  czech: [],
  polish: [],
  parrot: [],
  sheep: [],
  make: [],
  medicine: [],
  parfume: [],
  slytherin: [],
  naruto: [],
  sunflower: [],
  puzzle: [],
  book: [],
};

const allItems = (data as { items: Item[] }).items;
const lastUpdated = '21. 06. 2025';

const unsoldItems = allItems.filter(
  (item) => item.item_closing_action !== 'sold' && !item.is_reserved
);

export const totalOfItems = unsoldItems.length;

type Context = {
  shoppingMallItems: Item[];
  categories: Categories;
  totalOfItems: number;
  lastUpdated: string;
};

const CategoryContext = createContext<Context>({
  shoppingMallItems: unsoldItems,
  categories: initialCategories,
  totalOfItems: totalOfItems,
  lastUpdated: '',
});

const categories = unsoldItems.reduce<Categories>((categories, item) => {
  [
    ...getCountryCategories(item),
    ...getWordCategories(item),
    ...getBrandCategories(item),
  ].forEach((category) => categories[category].push(item));

  return categories;
}, initialCategories);

type Props = { children: ReactNode };

export function CategoryProvider({ children }: Props) {
  const memoizedValue = useMemo(
    () => ({
      shoppingMallItems: unsoldItems,
      categories,
      totalOfItems,
      lastUpdated,
    }),
    []
  );

  return (
    <CategoryContext.Provider value={memoizedValue}>
      {children}
    </CategoryContext.Provider>
  );
}

export const useCategories = () => useContext(CategoryContext);
