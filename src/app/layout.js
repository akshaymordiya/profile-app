"use client";

import CssBaseline from '@mui/material/CssBaseline';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import ThemeProvider from './theme/ThemeProvider';

import { Jost } from 'next/font/google'
import SidebarProvider from '@/context/SidebarContext';

const jost = Jost({ 
  subsets: ['latin'],
  style: ['normal', 'italic'], 
  weight: ['100','200', '300', '400', '500', '600', '700', '800', '900']
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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
