"use client";

import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { ebGaramond, typography } from "./typography";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#C42D1C",
      dark: "#A72618",
      contrastText: "rgba(2, 4, 5, 0.60)",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#FAF7F7",
    },
    text: {
      primary: "#020405",
      secondary: "#020405BF",
    },
  },
});

customTheme.components = {
  ...customTheme,
  MuiCssBaseline: {
    styleOverrides: `
        html, body {
          font-family: ${ebGaramond.style.fontFamily};
        }
      `,
  },
};

// @ts-ignore
customTheme.typography = typography(customTheme);

export { customTheme };
