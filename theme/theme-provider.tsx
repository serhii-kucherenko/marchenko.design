"use client";

import React, { ReactNode } from "react";
import { customTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useIsClient } from "@uidotdev/usehooks";

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const isClient = useIsClient();

  if (!isClient) {
    return null;
  }

  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </AppRouterCacheProvider>
  );
};
