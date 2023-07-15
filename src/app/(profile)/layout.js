"use client";
import { Box, useTheme } from '@mui/material';

import Sidebar from "./components/Sidebar"
import Header from './components/Header';

export default function AppLayout({ children }) {
  const theme = useTheme();
  return (
    <>
    <Box
        sx={{
          [theme.breakpoints.up('lg')]: {
            display: 'flex'
          },
          height: '100%',
        }}
      >
        <Sidebar />
        <Box
          sx={{            
            display: 'block',
            [theme.breakpoints.up('lg')]: {
              width: '100%'
            }
          }}
        >
          <Header />
          <Box display="block">{children}</Box>
        </Box>
      </Box>
    </>
  )
}
