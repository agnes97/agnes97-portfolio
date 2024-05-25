'use client';

import { useQuery } from '@tanstack/react-query';
import { User } from '../providers/auth-provider';

export const useGetUserData = (accessToken: string) => {
  return useQuery<User>({
    queryKey: ['user', accessToken],
    queryFn: async () => {
      const response = await fetch('https://prismify.macovi.space/auth/me', {
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
