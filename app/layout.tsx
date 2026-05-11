// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { ReactNode } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "./theme";

export const metadata: Metadata = {
  title: "Parallax Landing",
  description: "Parallax website with Next.js, Tailwind CSS, and MUI",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}