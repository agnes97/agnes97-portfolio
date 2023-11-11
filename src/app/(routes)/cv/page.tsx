"use client";

import { Divider } from "@/app/styles/global.styled";
import React from "react";

export default function Cv() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10rem",
        }}
      >
        Header
      </div>
      <Divider />
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10rem",
        }}
      >
        Secret Info
      </div>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10rem",
        }}
      >
        Footer
      </div>
    </>
  );
}
