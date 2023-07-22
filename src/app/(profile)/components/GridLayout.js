"use client";

import React from 'react'

import Grid from "@mui/material/Grid";
import MuiBox from "@mui/material/Box";

import { styled } from "@mui/material";

const Box = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "fit-content",
}));

function GridLayout({ children }) {
  return (
    <Grid container>
      {children}
    </Grid>
  );
}

function GridLayoutBox({ children }) {
  return (
    <Grid item xs={12} md={6} lg={6}>
      <Box>
        {children}
      </Box>
    </Grid>
  );
}

GridLayout.Box = GridLayoutBox

export default GridLayout;
