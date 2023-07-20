import React from 'react'

import MuiBox from "@mui/material/Box";

import DetailBox from '../components/DetailBox'

import { styled, useTheme, useMediaQuery } from "@mui/material";

const Box = styled(MuiBox)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const OngoingWorks = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg')) && !isMobile;

  const paddingBasedOnScreen = {
    "laptop": `${theme.spacing(3.1)} ${theme.spacing(3)}`,
    "mobile": `${theme.spacing(4)} ${theme.spacing(2)}`
  }

  let screen = "laptop";

  if(isMobile){
    screen = "mobile"
  } else if(isTablet){
    screen = "tablet"
  }

  return (
    <DetailBox
      padding={paddingBasedOnScreen[screen]}
      firstText="2"
      firstTextProps={{
        variant: "h3",
        sx: {
          fontSize: {
            xs: "45px",
            sm: "55px",
            md: '40px', 
            lg: "55px",
            xl : "60px",
            xxl: "80px"
          },
          color: theme.palette.black.main,
          fontWeight: 700
        }
      }}
      secondText="Ongoing Works"
      secondTextProps={{
        variant: 'h6',
        sx: {
          fontSize: {
            xs: "18px",
            sm: "18px",
            md: "16px",
            lg: "16px", 
            xl : "24px", 
            xxl: "32px"
          },
          color: theme.palette.secondary.main,
          fontWeight: 400
        }
      }}
      noChildrens
      forcedPosition="center"
    >
    </DetailBox>
  )
}

export default OngoingWorks