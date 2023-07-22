"use client";

import React from 'react'
import GridLayout from './components/GridLayout'

import Skeleton from '@mui/material/Skeleton';
import Grid from '@mui/material/Grid';

import Introduction from './content/Introduction';
import Services from "./content/Services";
import Expereince from "./content/Expereince";
import Meetup from "./content/Meetup";
import Hourse from "./content/Hours";
import CompletedWork from "./content/Work";
import OngoingWorks from "./content/OngoingWork";

const Loading = () => {
  return (
    <GridLayout>
      <GridLayout.Box>
        <Introduction showLoader />
        <Grid container spacing={1} mt={{ xs:3,  sm:3,  md: 3, lg: 2, xl: 4}}>
          <Grid item xs={12} sm={4} md={4} lg={4}><Expereince showLoader /></Grid>
          <Grid item xs={6} sm={4} md={4} lg={4}><Meetup showLoader /></Grid>
          <Grid item xs={6} sm={4} md={4} lg={4}><Hourse showLoader /></Grid>
          <Grid item xs={6} sm={8} md={8} lg={8}><CompletedWork showLoader /></Grid>
          <Grid item xs={6} sm={4} md={4} lg={4}><OngoingWorks showLoader /></Grid>
        </Grid>
      </GridLayout.Box>
      <GridLayout.Box>
        <Services showLoader />
      </GridLayout.Box>
    </GridLayout>
  )
}

export default Loading