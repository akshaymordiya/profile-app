"use client";
import { Box, useTheme } from '@mui/material';

import Sidebar from "./components/Sidebar"

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
        {/* <Header /> */}
        <Sidebar />
        <Box
          sx={{            
            display: 'block',
            pt: `${theme.header.height}`,
            [theme.breakpoints.up('lg')]: {
              width: '100%'
            }
          }}
        >
          <Box display="block">{children}</Box>
        </Box>
      </Box>
    </>
  )
}
