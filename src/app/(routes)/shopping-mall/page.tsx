"use client";

import { useRouter, useSearchParams } from "next/navigation";
import data from "./data.json";
import {
  AbsoluteContainer,
  Card,
  FilterBar,
  FilterButton,
  Filters,
  Gallery,
  RelativeContainer,
  Span,
  Title,
  Total,
  Wrapper,
} from "./page.styled";
import { useCallback } from "react";
import PriceTag from "./components/price-tag/PriceTag";

type Thumbnail = {
  type: string;
  url: string;
};

type Photo = {
  thumbnails: Thumbnail[];
};

type User = {
  country_code: string;
};

type Item = {
  id: number;
  photos: Photo[];
  title: string;
  description: string;
  user: User;
  price_numeric: string;
  currency: string;
  url: string;
  brand: string;
};

const shoppingMallItems: Item[] = data.items;
const totalOfItems = shoppingMallItems.length;
const lastUpdated = "5. 12. 2023";

type Country = "czech" | "polish";

type Word = "parrot" | "sheep" | "hourglass" | "slytherin";

type Brand = "skincare" | "rituals" | "parfume";

type Categories = Record<Country, Item[]> &
  Record<Word, Item[]> &
  Record<Brand, Item[]>;

const categoryEmojis = new Map<keyof Categories, string>([
  ["czech", "🇨🇿"],
  ["polish", "🇵🇱"],
  ["parrot", "🦜"],
  ["sheep", "🐑"],
  ["hourglass", "⏳"],
  ["skincare", "🧘‍♀️"],
  ["rituals", "⛩️"],
  ["parfume", "💕"],
  ["slytherin", "🐍"],
]);

const getCountryCategories = ({ user: { country_code } }: Item) => {
  const categories: Country[] = [];

  switch (country_code) {
    case "CZ":
      categories.push("czech");
    case "PL":
      categories.push("polish");
  }

  return categories;
};

const words: Map<Word, string[]> = new Map([
  ["parrot", ["parrot", "papoušek", "papoušci", "papuga", "papugi"]],
  ["sheep", ["sheep", "ovce", "ovečka", "owieczka", "owieczki"]],
  ["hourglass", ["klepsydra", "přesýpací"]],
  ["slytherin", ["slytherin", "zmijozel", "harry", "potter", "wąż"]],
]);

const places = ["title", "description"] as const;

const getWordCategories = (item: Item) =>
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

const getBrandCategories = (item: Item) =>
  Array.from(brands.entries()).reduce<Brand[]>(
    (categories, [brandCategory, brands]) => {
      if (brands.some((brand) => item["brand"].includes(brand)))
        categories.push(brandCategory);
      return categories;
    },
    []
  );

const categories = shoppingMallItems.reduce<Categories>(
  (categories, item) => {
    [
      ...getCountryCategories(item),
      ...getWordCategories(item),
      ...getBrandCategories(item),
    ].forEach((category) => categories[category].push(item));

    return categories;
  },
  {
    czech: [],
    polish: [],
    parrot: [],
    sheep: [],
    hourglass: [],
    skincare: [],
    rituals: [],
    parfume: [],
    slytherin: [],
  }
);

export default function ShoppingMall() {
  const router = useRouter();
  const searchParams = useSearchParams()!;

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const activeFilter = searchParams.get("category") ?? "all";

  return (
    <Wrapper>
      <FilterBar>
        <Filters>
          <FilterButton
            isActive={activeFilter === "all"}
            type="button"
            onClick={() => {
              router.push(`/shopping-mall`);
            }}
          >
            ♾️
          </FilterButton>

          {Object.keys(categories).map((category) => (
            <FilterButton
              isActive={activeFilter === category}
              key={category}
              type="button"
              onClick={() => {
                router.push(
                  `/shopping-mall?${createQueryString("category", category)}`
                );
              }}
            >
              {categoryEmojis.get(category as keyof Categories)
                ? categoryEmojis.get(category as keyof Categories)
                : category}
            </FilterButton>
          ))}
        </Filters>

        {activeFilter !== "all" ? (
          <Total>
            <Span>&#123;</Span> inCategory:{" "}
            <Span>{categories[activeFilter as keyof Categories].length}</Span>,
            total: <Span>{totalOfItems} &#125;</Span>
          </Total>
        ) : (
          <Total>
            <Span>&#123;</Span> total: <Span>{totalOfItems} &#125;</Span>
          </Total>
        )}
      </FilterBar>
      <Gallery>
        {(activeFilter === "all"
          ? shoppingMallItems
          : categories[activeFilter as keyof Categories]
        ).map((item, index) => (
          <Card key={item.id} href={item.url} target="_blank">
            <header>
              <Title title={item.title}>{item.title}</Title>
            </header>

            <RelativeContainer>
              <img
                src={
                  item.photos[0].thumbnails.find(
                    (thumbnail) => thumbnail.type === "thumb310x430"
                  )!.url
                }
                width={200}
              />
              <AbsoluteContainer>
                <PriceTag>{`${Math.floor(Number(item.price_numeric))} ${
                  item.currency
                }`}</PriceTag>
              </AbsoluteContainer>
            </RelativeContainer>

            <footer>
              <span>No. {index + 1}</span>
            </footer>
          </Card>
        ))}
      </Gallery>
    </Wrapper>
  );
}
