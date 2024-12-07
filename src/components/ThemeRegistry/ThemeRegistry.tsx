// app/ThemeRegistry.tsx
"use client";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import defaultTheme from "./theme";

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    // "@ts-expect-error"
    <ThemeProvider theme={defaultTheme}>
      {/* <CssBaseline /> */}
      {children}
    </ThemeProvider>
  );
}
