import { Item } from "../types";

export type Country = "czech" | "polish";

export const getCountryCategories = ({ user: { country_code } }: Item) => {
  const categories: Country[] = [];

  if (country_code === "CZ" || country_code === "SK") categories.push("czech");
  if (country_code === "PL") categories.push("polish");

  return categories;
};
