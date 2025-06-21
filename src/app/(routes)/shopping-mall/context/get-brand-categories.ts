import { Item } from '../types';

export type Brand = 'medicine' | 'parfume';

const brands: Map<Brand, string[]> = new Map([
  ['medicine', ['MEDICINE']],
  ['parfume', ['Paco Rabanne', 'Katy Perry', 'Jean Paul', 'Giorgio Armani']],
]);

export const getBrandCategories = (item: Item) =>
  Array.from(brands.entries()).reduce<Brand[]>(
    (categories, [brandCategory, brands]) => {
      if (brands.some((brand) => item['brand_title'].includes(brand)))
        categories.push(brandCategory);
      return categories;
    },
    []
  );
