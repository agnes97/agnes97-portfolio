import { ReactNode } from 'react';
import { Analytics } from '@vercel/analytics/next';
import StyledComponentsProvider from './providers/styled-components-provider';
import { CookiesProvider } from 'next-client-cookies/server';
import { ReactQueryClientProvider } from './providers/react-query-client-provider';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import AuthProvider from './providers/auth-provider';
import ModalProvider from './providers/modal-provider';

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
            <ModalProvider>
              <AuthProvider>{children}</AuthProvider>
            </ModalProvider>

            <ReactQueryDevtools
              initialIsOpen={false}
              buttonPosition='bottom-left'
            />
            <Analytics />
          </StyledComponentsProvider>
        </html>
      </CookiesProvider>
    </ReactQueryClientProvider>
  );
}
