'use client';

import { useQuery } from '@tanstack/react-query';

type AccessCodeResponse = {
  access_allowed: boolean;
};

export const useGetAccessCode = (access_code?: string) =>
  useQuery<AccessCodeResponse>({
    queryKey: ['access_code', access_code],
    queryFn: async () => {
      if (!access_code) return { access_allowed: false };

      const response = await fetch(
        `https://prismify.macovi.space/access?id=${access_code}`
      );

      return { access_allowed: (await response.json()) === true };
    },
  });
