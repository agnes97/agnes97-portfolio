"use client";

import { useSearchParams } from "next/navigation";
import { Card, Gallery, Title, Wrapper } from "./page.styled";
import FilterBar from "./components/filter-bar/FilterBar";
import Footer from "./components/footer/Footer";
import ProductImage from "./components/product-image/ProductImage";
import {
  Categories,
  CategoryContext,
  CategoryProvider,
} from "./context/category-context";
import { useContext } from "react";

export default function ShoppingMall() {
  const searchParams = useSearchParams()!;
  const activeFilter = searchParams.get("category") ?? "all";

  const { shoppingMallItems, categories, totalOfItems } =
    useContext(CategoryContext);

  return (
    <CategoryProvider>
      <Wrapper>
        <FilterBar
          activeFilter={activeFilter}
          categories={categories}
          totalOfItems={totalOfItems}
        />

        <Gallery>
          {(activeFilter === "all"
            ? shoppingMallItems
            : categories[activeFilter as keyof Categories]
          ).map((item, index) => (
            <Card key={item.id} href={item.url} target="_blank">
              <header>
                <Title title={item.title}>{item.title}</Title>
              </header>

              <ProductImage
                price={Math.floor(Number(item.price_numeric))}
                currency={item.currency}
                thumbnailSrc={
                  item.photos[0].thumbnails.find(
                    (thumbnail) => thumbnail.type === "thumb310x430"
                  )!.url
                }
              />

              <Footer
                itemIndex={index + 1}
                countryCode={item.user.country_code}
              />
            </Card>
          ))}
        </Gallery>
      </Wrapper>
    </CategoryProvider>
  );
}
