"use client";

import React, { ReactNode } from "react";
import { customTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  return (
    <>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </>
  );
};
