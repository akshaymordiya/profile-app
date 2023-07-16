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
          fontSize: '55px',
          color: theme.palette.black.main,
          fontWeight: 700
        }
      }}
      secondText="Ongoing Works"
      secondTextProps={{
        variant: 'h6',
        sx: {
          fontSize: '24',
          color: theme.palette.secondary.main,
          fontWeight: 400
        }
      }}
      autoHeight={!isMobile}
    >
    </DetailBox>
  )
}

export default OngoingWorks