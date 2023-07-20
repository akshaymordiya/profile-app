"use client";

import { useContext } from "react";
import Box from "@mui/material/Box";
import { useTheme } from '@mui/material';
import { SidebarContext } from "@/context/SidebarContext";

import Sidebar from "./components/Sidebar"
import Header from './components/Header';
import Footer from "./components/Footer";


export default function AppLayout({ children }) {
  const theme = useTheme();

  const { sidebarToogle } = useContext(SidebarContext);

  return (
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
            height: 'fit-content',
            width: '100%',
            [theme.breakpoints.up('lg')]: {
              width: sidebarToogle ? '84%' : '95%',
            },
          }}
        >
          <Header />
          <Box display="block" sx={{
            height: 'fit-content',
            overflowY: 'auto'
          }}>
            {children}
          </Box>
          <Footer />
        </Box>
    </Box>
  )
}
