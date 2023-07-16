import React, { Fragment } from 'react'

import MuiTypography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import Service from '../components/Service';

import servicesData from "../../../data/services";

import { styled, useTheme } from "@mui/material";

const Typography = styled(MuiTypography)(({ theme }) => ({
  color: theme.colors.black.main,
  fontWeight: 600,
  fontSize: '20px',
}));

const Services = () => {

  const theme = useTheme();
  
  return (
    <Fragment>
      <Typography variant="h5" mb={4} >Fuel Your Success: My Services, Your Growth</Typography>
      <Grid 
        container 
        spacing={2} 
        sx={{ 
          height: `calc(100% - ${theme.spacing(2.6)})`, 
          overflowY: 'auto',
          paddingBottom: theme.spacing(1),
        }}>
        {servicesData.map(data => (
          <Grid key={data.id} item xs={12} sm={6} md={6} lg={6}>
            <Service service={data} />
          </Grid>
        ))}
      </Grid>
    </Fragment>
  )
}

export default Services