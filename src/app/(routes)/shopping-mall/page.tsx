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
            const lastOnlineDate = new Date(item.user.last_loged_on_ts);

            return (
              <CardWithAnchor
                key={item.id}
                index={index}
                title={item.title}
                countryCode={item.user.country_code}
                tagText={`${Math.floor(Number(item.price_numeric))} ${item.currency}`}
                thumbnailSrc={
                  item.photos[0].thumbnails.find(
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
