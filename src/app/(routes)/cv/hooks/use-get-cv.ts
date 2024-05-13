'use client';

import { useQuery } from '@tanstack/react-query';

export type Experience = {
  company_name: string;
  employment_start: string;
  employment_end: string | null;
};

export type CV = {
  name: string;
  date_of_birth: string;
  phone_number: string;
  email: string;
  address_street: string;
  address_city: string;
  address_zip: string;
  experiences: Experience[];
};

export const useGetCV = (accessCode?: string) =>
  useQuery<CV>({
    queryKey: ['cv', accessCode],
    queryFn: async () => {
      const response = await fetch('https://prismify.macovi.space/cv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ accessCode: accessCode ?? '' }),
      });

      return response.json();
    },
  });
