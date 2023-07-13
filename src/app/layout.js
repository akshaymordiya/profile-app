"use client";

import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ThemeProvider from './theme/ThemeProvider';

import SidebarProvider from '@/context/SidebarContext';
import { jost, georama, farsan } from "../fonts/utils";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jost.variable} ${georama.variable} ${farsan.variable}`}>
      <SidebarProvider>
        <ThemeProvider>
          <body className={jost.className}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <CssBaseline />
              {children}
            </LocalizationProvider>
          </body>
        </ThemeProvider>
      </SidebarProvider>
    </html>
  )
}
