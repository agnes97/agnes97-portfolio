import { ReactNode, createContext, useContext, useMemo } from "react";
import { Item } from "../types";
import data from "../data.json";
import { Brand, getBrandCategories } from "./get-brand-categories";
import { Country, getCountryCategories } from "./get-country-categories";
import { Word, getWordCategories } from "./get-word-categories";

export type Categories = Record<Country, Item[]> &
  Record<Word, Item[]> &
  Record<Brand, Item[]>;

export const initialCategories: Categories = {
  czech: [],
  polish: [],
  parrot: [],
  sheep: [],
  hourglass: [],
  skincare: [],
  rituals: [],
  parfume: [],
  slytherin: [],
  fox: [],
  sunflower: [],
  puzzle: [],
};

// @ts-ignore
const shoppingMallItems: Item[] = data.items;
export const totalOfItems = shoppingMallItems.length;
const lastUpdated = "7. 12. 2023";

type Context = {
  shoppingMallItems: Item[];
  categories: Categories;
  totalOfItems: number;
  lastUpdated: string;
};

const CategoryContext = createContext<Context>({
  shoppingMallItems: shoppingMallItems,
  categories: initialCategories,
  totalOfItems: totalOfItems,
  lastUpdated: "",
});

const categories = shoppingMallItems.reduce<Categories>((categories, item) => {
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
      shoppingMallItems,
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
