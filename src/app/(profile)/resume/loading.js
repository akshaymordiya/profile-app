"use client"

import React from 'react'

import GridLayout from '../components/GridLayout';

import Skeleton from '@mui/material/Skeleton';

const Loading = () => {
  return (
    <GridLayout>
      <GridLayout.Box>
        <Skeleton animation="wave"  variant='rectangular' sx={{ width: "100%", height: "100%" }}/>
      </GridLayout.Box>
      <GridLayout.Box>
        <Skeleton animation="wave"  variant='rectangular' sx={{ width: "100%", height: "100%" }}/>
      </GridLayout.Box>
    </GridLayout>
  )
}

export default Loading