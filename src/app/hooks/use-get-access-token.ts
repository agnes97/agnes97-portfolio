import { QueryClient, useMutation } from 'react-query';

export type AccessTokenBody = {
  email: string;
  password: string;
};

type AccessTokenResponse = {
  accessToken: string;
};

export const useGetAccessToken = () => {
  const queryClient = new QueryClient();

  return useMutation<AccessTokenResponse, Error, AccessTokenBody>(
    'get-access-token',
    async (body) => {
      const response = await fetch('https://prismify.macovi.space/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });

      return response.json();
    },
    {
      onSuccess: async (data) => {
        await queryClient.invalidateQueries({ queryKey: ['user'] });
        localStorage.setItem('accessToken', data.accessToken);
      },
    }
  );
};
