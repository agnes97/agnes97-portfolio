import React, { ReactNode } from 'react';
import StyledComponentsProvider from './providers/styled-components-provider';

export const metadata = {
  title: 'Agnes97',
  description: 'Portfolio',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <StyledComponentsProvider>{children}</StyledComponentsProvider>
    </html>
  );
}
