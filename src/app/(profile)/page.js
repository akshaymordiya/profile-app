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

import { styled } from "@mui/material";

export const metadata = {
  title: 'About me page',
  description: 'The development is in progress',
}

const Box = styled(MuiBox)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "fit-content",
}));

export default function Home() {
  return (
    <Grid container>
      <Grid item xs={12} md={6} lg={6}>
        <Box>
          <Introduction />
          <Grid container spacing={1} mt={{ xs:3,  sm:3,  md: 3, lg: 2, xl: 4}}>
            <Grid item xs={12} sm={4} md={4} lg={4}><Expereince /></Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}><Meetup /></Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}><Hourse /></Grid>
            <Grid item xs={6} sm={8} md={8} lg={8}><CompletedWork /></Grid>
            <Grid item xs={6} sm={4} md={4} lg={4}><OngoingWorks /></Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <Box>
          <Services />
        </Box>
      </Grid>
    </Grid>
  )
}
