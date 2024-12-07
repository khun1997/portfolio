// app/ThemeRegistry.tsx
"use client";
//@ts-ignore
// import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import defaultTheme from "./theme";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: any) {
  const { options, children } = props;

  return (
    //@ts-ignore
    <ThemeProvider theme={defaultTheme}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}
