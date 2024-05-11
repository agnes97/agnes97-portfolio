'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '../providers/auth-provider';

export const useGetUserData = (accessToken: string) => {
  return useQuery<User>({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await fetch('https://prismify.macovi.space/auth/me', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return response.json();
    },
    enabled: !!accessToken,
  });
};
