"use client";

import React, { FC, useCallback } from "react";
import { Bar, FilterButton, Filters, Span, Total } from "./FilterBar.styled";
import { useRouter, useSearchParams } from "next/navigation";
import { categoryEmojis } from "../../utils/get-emojis";
import { Categories } from "../../context/category-context";

type Props = {
  activeFilter: keyof Categories | "all";
  categories: Categories;
  totalOfItems: number;
};

const FilterBar: FC<Props> = ({ activeFilter, categories, totalOfItems }) => {
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

  return (
    <Bar>
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

        {(Object.keys(categories) as Array<keyof Categories>).map(
          (category) => (
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
              {categoryEmojis.get(category)
                ? categoryEmojis.get(category)
                : category}
            </FilterButton>
          )
        )}
      </Filters>

      {activeFilter !== "all" ? (
        <Total>
          <Span>&#123;</Span> inCategory:{" "}
          <Span>{categories[activeFilter].length}</Span>, total:{" "}
          <Span>{totalOfItems} &#125;</Span>
        </Total>
      ) : (
        <Total>
          <Span>&#123;</Span> total: <Span>{totalOfItems} &#125;</Span>
        </Total>
      )}
    </Bar>
  );
};

export default FilterBar;
