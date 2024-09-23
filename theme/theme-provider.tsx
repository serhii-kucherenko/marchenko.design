"use client";

import React, { ReactNode } from "react";
import { customTheme } from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { useIsClient } from "@uidotdev/usehooks";
import { AnimatedCircleButton } from "@/app/components/animated-circle-button";
import PageLoaderIcon from "@/public/images/page-loader.svg";

interface ThemeProviderProps {
  children: ReactNode;
}

export const CustomThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}) => {
  const isClient = useIsClient();

  if (!isClient) {
    console.log("isClient is false");

    return (
      <div className="min-h-screen flex justify-center items-center">
        <AnimatedCircleButton
          mobileImage={PageLoaderIcon}
          desktopImage={PageLoaderIcon}
          className="animate-spin-faster"
        />
      </div>
    );
  }

  console.log("isClient is true");

  return (
    <AppRouterCacheProvider>
      <CssBaseline />
      <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
        <ThemeProvider theme={customTheme}>{children}</ThemeProvider>
      </NextAppDirEmotionCacheProvider>
    </AppRouterCacheProvider>
  );
};
