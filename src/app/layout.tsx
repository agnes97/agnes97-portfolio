import React, { ReactNode } from 'react';
import StyledComponentsProvider from './providers/styled-components-provider';
import { CookiesProvider } from 'next-client-cookies/server';

export const metadata = {
  title: 'Agnes97',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <CookiesProvider>
        <StyledComponentsProvider>{children}</StyledComponentsProvider>
      </CookiesProvider>
    </html>
  );
}
