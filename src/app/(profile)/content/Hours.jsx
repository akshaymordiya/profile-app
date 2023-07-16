import React from 'react'
import Image from 'next/image';

import MuiBox from "@mui/material/Box";

import DetailBox from '../components/DetailBox'

import { styled, useTheme, useMediaQuery } from "@mui/material";

const Box = styled(MuiBox)(({ theme }) => ({
  background: theme.colors.gradients.hours,
  position: "absolute",
  bottom: '-40%',
  left: '20%',
  overflow: 'hidden',
  borderRadius: '100%',
  width: '230px',
  height: '230px'
}));

const WorkImage = styled(Image)(() => ({
  position: "absolute",
  bottom: "5%",
  right: "5%"
}));

const Hourse = () => {

  const theme = useTheme();
  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.down('lg')) && !isMobile;

  const paddingBasedOnScreen = {
    "mobile": `${theme.spacing(2)} ${theme.spacing(3)}`,
    "laptop": `${theme.spacing(4)} ${theme.spacing(2)}`
  }

  let screen = "laptop";

  if(isMobile){
    screen = "mobile"
  } else if(isTablet){
    screen = "tablet"
  }

  return (
    <DetailBox
      padding={`${theme.spacing(3)} ${theme.spacing(2)}`}
      firstText="3405 Hrs"
      firstTextProps={{
        variant: "h6",
        sx: {
          fontSize: '18px',
          color: theme.palette.black.main,
        }
      }}
      secondText="Logged"
      secondTextProps={{
        variant: 'p',
        sx: {
          fontSize: '16px',
          color: theme.palette.secondary.main
        }
      }}
      textPosition="top"
    >
      <Box>
      </Box>
      <WorkImage 
        src="/bg/work.png" 
        width={100} 
        height={100} 
        alt="avatar-one" 
      />
    </DetailBox>
  )
}

export default Hourse