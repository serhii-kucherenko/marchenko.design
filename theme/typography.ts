import { Theme } from "@mui/material";
import { EB_Garamond, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

export const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-eb-garamond",
});

export const typography = (theme: Theme) => ({
  fontFamily: "inherit",
  allVariants: {
    color: "#020405",
    fontFamily: ebGaramond.style.fontFamily,
  },
  h1: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 40,
    lineHeight: 48 / 40,
    fontWeight: 400,
    [theme.breakpoints.up("md")]: {
      fontSize: 56,
      lineHeight: 67.2 / 56,
    },
  },
  h2: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 36,
    lineHeight: 1.5,
    fontWeight: 400,
  },
  h3: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 22,
    lineHeight: 40 / 22,
    fontWeight: 400,
  },
  h4: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 20,
    lineHeight: 24 / 20,
    fontWeight: 400,
  },
  h5: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 18,
    lineHeight: 22 / 18,
    fontWeight: 500,
  },
  h6: {
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 400,
  },
  subtitle1: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 22,
    lineHeight: 24 / 22,
    fontWeight: 400,
  },
  subtitle2: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 13,
    lineHeight: 24 / 13,
    fontWeight: 400,
  },
  body1: {
    fontFamily: inter.style.fontFamily,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 300,
  },
  body2: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 14,
    lineHeight: 24 / 14,
    fontWeight: 400,
  },
  caption: {
    fontSize: 12,
    lineHeight: 1.6,
    fontWeight: 400,
    letterSpacing: "0.15px",
  },
  overline: {
    fontSize: 14,
    lineHeight: 20 / 14,
    fontWeight: 600,
  },
  button: {
    fontSize: 14,
    lineHeight: 24 / 14,
    fontWeight: 400,
    letterSpacing: "0.15px",
  },
});
