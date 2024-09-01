'use client';

import React from 'react';
import Flex from '@/app/components/flex/Flex';
import { useGetRatings } from './hooks/use-get-ratings';
import { CardWithLink } from '@/app/components/card/Card';

import london2024 from '@/app/assets/ratings/london-2024.webp';

type RatingsImages = {
  id: string;
  logoSrc: string;
};

const ratingsImages: RatingsImages[] = [
  {
    id: 'london-2024',
    logoSrc: london2024.src,
  },
];

export default function Rating() {
  const { data: ratings } = useGetRatings();

  return (
    <Flex flexDirection='column' gap='2rem' padding={'4rem 0'}>
      {ratings?.map((rating, index) => (
        <CardWithLink
          route={{ pathname: `/rating/${rating.id}` }}
          key={rating.id}
          index={index}
          title={rating.title}
          countryCode={'uk'} // TODO: from BE
          thumbnailSrc={
            ratingsImages.find((image) => image.id === rating.id)?.logoSrc ?? '' // TODO: default image
          }
          date={'08/2024'} // TODO: date
          customCardWidth='300px'
          rectangularImages
        />
      ))}
    </Flex>
  );
}
