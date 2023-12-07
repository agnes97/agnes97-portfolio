import { Item } from "../types";

export type Brand = "skincare" | "rituals" | "parfume";

const brands: Map<Brand, string[]> = new Map([
  [
    "skincare",
    [
      "Pai",
      "Heimish",
      "Skin1004",
      "Innisfree",
      "Korika",
      "COSRX",
      "Hada labo",
      "Pyunkang yul",
      "Q & A",
    ],
  ],
  ["rituals", ["Rituals"]],
  ["parfume", ["Paco Rabanne", "Katy Perry"]],
]);

export const getBrandCategories = (item: Item) =>
  Array.from(brands.entries()).reduce<Brand[]>(
    (categories, [brandCategory, brands]) => {
      if (brands.some((brand) => item["brand"].includes(brand)))
        categories.push(brandCategory);
      return categories;
    },
    []
  );
