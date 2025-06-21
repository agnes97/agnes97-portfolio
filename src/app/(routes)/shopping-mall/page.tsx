'use client';

import { useSearchParams } from 'next/navigation';
import { Gallery, Wrapper } from './page.styled';
import FilterBar from './components/filter-bar/FilterBar';
import {
  Categories,
  CategoryProvider,
  useCategories,
} from './context/category-context';
import { CardWithAnchor } from '@/app/components/card/Card';
import { getCountryCode } from './utils/get-country-code';

export default function ShoppingMall() {
  const searchParams = useSearchParams();
  const activeFilter = (searchParams.get('category') ?? 'all') as
    | keyof Categories
    | 'all';

  const { shoppingMallItems, categories, totalOfItems } = useCategories();

  return (
    <CategoryProvider>
      <Wrapper>
        <FilterBar
          activeFilter={activeFilter}
          categories={categories}
          totalOfItems={totalOfItems}
        />

        <Gallery>
          {(activeFilter === 'all'
            ? shoppingMallItems
            : categories[activeFilter]
          ).map((item, index) => {
            // lastOnlineDate won't work as it was removed from EP during June 2025
            const lastOnlineDate = new Date();

            return (
              <CardWithAnchor
                key={item.id}
                index={index}
                title={item.title}
                countryCode={getCountryCode(item.title)}
                tagText={`${Math.floor(Number(item.price.amount))} ${item.price.currency_code}`}
                thumbnailSrc={
                  item.photo.thumbnails.find(
                    (thumbnail) => thumbnail.type === 'thumb310x430'
                  )?.url ?? ''
                }
                url={item.url}
                lastOnlineDate={lastOnlineDate}
              />
            );
          })}
        </Gallery>
      </Wrapper>
    </CategoryProvider>
  );
}
