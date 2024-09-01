'use client';

import { useQuery } from '@tanstack/react-query';

export type RatingItem = {
  id: string;
  title: string;
  myRating?: number;
  finalRating?: number;
  favoriteById?: string;
  data: unknown;
};

type Rating = {
  id: string;
  title: string;
  participants: Array<{ id: string; name: string }>;
  ratedItems: RatingItem[];
  unratedItems: RatingItem[];
};

export const useGetRating = (ratingId: string) => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<Rating>({
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
