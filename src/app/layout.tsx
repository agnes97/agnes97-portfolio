import StyledComponentsRegistry from "@/lib/styled-component-registry";
import { Inter } from "next/font/google";
import React, { ReactNode } from "react";
import { GlobalStyle } from "./styles/global.styled";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Agnes97",
  description: "Portfolio",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <GlobalStyle />
      <body>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
