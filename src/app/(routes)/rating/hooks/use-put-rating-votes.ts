'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';

export type Vote = {
  id: string;
  rating: number;
  isFavorite?: boolean;
};

export const usePutRatingVotes = () => {
  const accessToken = localStorage.getItem('accessToken');

  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['rating-votes'],
    mutationFn: async (votes: Vote[]) => {
      const response = await fetch(
        'https://prismify.macovi.space/rating/london-2024/votes',
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(votes),
        }
      );

      return response.json();
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ['rating'] });
    },
  });
};
