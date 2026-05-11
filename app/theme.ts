// app/theme.ts
"use client";

import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00E5FF",
    },
    background: {
      default: "#050816",
      paper: "#050816",
    },
  },
  typography: {
    fontFamily: ["system-ui", "sans-serif"].join(","),
  },
});