"use client";

import Box from "@mui/material/Box";
import { useTheme } from '@mui/material';

import Sidebar from "./components/Sidebar"
import Header from './components/Header';
import Footer from "./components/Footer";



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
            },
          }}
        >
          <Header />
          <Box display="block" sx={{
            height: 'fit-content',
            maxHeight: `calc(100vh - ${theme.header.height})`,
            overflowY: 'auto'
          }}>
            {children}
            <Footer />
          </Box>
        </Box>
      </Box>
    </>
  )
}
