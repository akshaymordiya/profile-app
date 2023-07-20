import React from 'react'
import Image from 'next/image';
import Lottie from 'react-lottie';

import MuiBox from "@mui/material/Box";

import DetailBox from '../components/DetailBox'

import { styled, useTheme, useMediaQuery } from "@mui/material";
import animationData from "../../../data/lottie/work.json";

const Box = styled(MuiBox)(({ theme }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const LottieOptions = {
  loop: true,
  autoplay: true,
  animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice"
  }
};

const CompletedWork = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg')) && !isMobile;

  const paddingBasedOnScreen = {
    "laptop": `${theme.spacing(2)} ${theme.spacing(3)}`,
    "mobile": `${theme.spacing(2)}`
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
      firstText="15+"
      firstTextProps={{
        variant: "h3",
        sx: {
          fontSize: {
            xs: "38px",
            sm: "38px",
            md: '33px',
            lg: "40px", 
            xl : "50px", 
            xxl : "65px"
          },
          color: theme.palette.black.main,
          fontWeight: 700,
          marginTop: isMobile ? theme.spacing(2) : '0px'
        }
      }}
      secondText="Completed Works"
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
      textPosition={isMobile ? "bottom" : "right"}
      autoHeight={!isMobile}
    >
      <Box>
        <Lottie 
          options={LottieOptions}
        />
      </Box>
    </DetailBox>
  )
}

export default CompletedWork