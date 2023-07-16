"use client";

import Grid from "@mui/material/Grid";
import MuiBox from "@mui/material/Box";

import Introduction from "./content/Introduction";
import Services from "./content/Services";
import Expereince from "./content/Expereince";
import Meetup from "./content/Meetup";
import Hourse from "./content/Hours";
import CompletedWork from "./content/Work";
import OngoingWorks from "./content/OngoingWork";

import { styled, useTheme } from "@mui/material";

export const metadata = {
  title: 'About me page',
  description: 'The development is in progress',
}

const Box = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "fit-content",
  maxHeight: `calc(100vh - ${theme.header.height})`,
  overflow: 'hidden'
}));

export default function Home() {

  const theme = useTheme();

  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{ overflowY: 'auto'}}>
          <Introduction />
          <Grid container spacing={1} mt={2}>
            <Grid item xs={12} sm={4} md={4} lg={4}><Expereince /></Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}><Meetup /></Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}><Hourse /></Grid>
            <Grid item xs={6} sm={8} md={8} lg={8}><CompletedWork /></Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}><OngoingWorks /></Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box sx={{ overflowY: 'auto'}}>
          <Services />
        </Box>
      </Grid>
    </Grid>
  )
}
