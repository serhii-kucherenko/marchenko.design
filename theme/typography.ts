import { Theme } from "@mui/material";
import { EB_Garamond, Inter } from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
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
    fontWeight: 500,
  },
  h3: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 24,
    lineHeight: 40 / 24,
    fontWeight: 500,
  },
  h4: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 16,
    lineHeight: 24 / 16,
    fontWeight: 400,
  },
  h5: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 14,
    lineHeight: 22 / 14,
    fontWeight: 500,
  },
  h6: {
    fontSize: 18,
    lineHeight: 1.5,
    fontWeight: 500,
  },
  subtitle1: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 18,
    lineHeight: 24 / 18,
    fontWeight: 500,
  },
  subtitle2: {
    fontFamily: ebGaramond.style.fontFamily,
    fontSize: 12,
    lineHeight: 24 / 12,
    fontWeight: 500,
  },
  body1: {
    fontFamily: inter.style.fontFamily,
    fontSize: 16,
    lineHeight: 1.5,
    fontWeight: 400,
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
    fontWeight: 500,
    letterSpacing: "0.15px",
  },
});
