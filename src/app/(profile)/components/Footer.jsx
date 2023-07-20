import React, { useContext } from 'react';

import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material";

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
import { SidebarContext } from '@/context/SidebarContext';

const Box = styled(MuiBox, { shouldForwardProp: prop => prop !== "open"})(({ theme, open }) => ({
  display: 'flex',
  justifyContent: 'center',
  marginTop: 'auto',
  alignItems: 'center',
  height: theme.footer.height,
  background: theme.footer.background,
  color: theme.footer.textColor,
  zIndex: "-999",
  position: "static",
  bottom: 0,
  width: "100%",
  [theme.breakpoints.up('lg')]: {
    width: open ? "84%" : "95%"
  }
}))

const Footer = () => {

  const { sidebarToogle } = useContext(SidebarContext);
  
  return (
    <Box open={sidebarToogle}>
      <Typography pr={1}>Copyright © 2023. All rights reserved. Made with </Typography>
      <FavoriteRoundedIcon fontSize="small" color="error"/>
    </Box>
  )
}

export default Footer