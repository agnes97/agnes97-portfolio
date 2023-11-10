import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import StyledComponentsProvider from "./providers/styled-components-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agnes97",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <StyledComponentsProvider>{children}</StyledComponentsProvider>
    </html>
  );
}
