import React, { ReactNode } from 'react';
import StyledComponentsProvider from './providers/styled-components-provider';
import { CookiesProvider } from 'next-client-cookies/server';
import { ReactQueryClientProvider } from './providers/react-query-client-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const metadata = {
  title: 'Agnes97',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <ReactQueryClientProvider>
      <CookiesProvider>
        <html lang='en'>
          <StyledComponentsProvider>
            {children}

            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition='bottom-left'
            />
          </StyledComponentsProvider>
        </html>
      </CookiesProvider>
    </ReactQueryClientProvider>
  );
}
