"use client";

import React, { FC, PropsWithChildren } from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { Content, Main } from "../styles/global.styled";

const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Main>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Main>
  );
};

export default PageLayout;
