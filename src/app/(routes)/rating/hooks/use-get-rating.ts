'use client';

import { useQuery } from '@tanstack/react-query';
import { Rating } from './use-get-ratings';

export type RatingItem = {
  id: string;
  title: string;
  myRating?: number;
  finalRating?: number;
  favoriteById?: string;
  data: unknown;
};

type RatingWithItems = Rating & {
  ratedItems: RatingItem[];
  unratedItems: RatingItem[];
};

export const useGetRating = (ratingId: string) => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<RatingWithItems>({
    queryKey: ['rating', accessToken],
    queryFn: async () => {
      const response = await fetch(
        `https://prismify.macovi.space/rating/${ratingId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.status !== 200) throw new Error('Failed to fetch user data');

      return response.json();
    },
    enabled: !!accessToken,
  });
};
