import React from 'react';

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { useTheme } from "@mui/material";

import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';

const Footer = () => {
  const theme = useTheme();
  
  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: theme.footer.height,
      background: theme.footer.background,
      color: theme.footer.textColor,
      zIndex: "-999"
    }}>
      <Typography pr={1}>Copyright © 2023. All rights reserved. Made with </Typography>
      <FavoriteRoundedIcon fontSize="small" color="error"/>
    </Box>
  )
}

export default Footer