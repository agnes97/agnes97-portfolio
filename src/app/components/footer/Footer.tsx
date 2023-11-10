"use client";

import React from "react";
import { StyledFooter } from "./Footer.styled";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <StyledFooter>© 2022 - {currentYear} Jana Mácová</StyledFooter>;
};

export default Footer;
