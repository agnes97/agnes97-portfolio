'use client';

import { useQuery } from '@tanstack/react-query';

export type Participant = {
  id: string;
  name: string;
  avatar: string | null;
};

export type Rating = {
  id: string;
  title: string;
  countryCode: string;
  startDate: string;
  endDate: string | null;
  emoji: string | null;
  participants: Participant[];
};

export const useGetRatings = () => {
  const accessToken = localStorage.getItem('accessToken');

  return useQuery<Rating[]>({
    queryKey: ['ratings', accessToken],
    queryFn: async () => {
      const response = await fetch('https://prismify.macovi.space/rating', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.status !== 200) throw new Error('Failed to fetch user data');

      return response.json();
    },
    enabled: !!accessToken,
  });
};
