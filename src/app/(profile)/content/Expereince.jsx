import React from 'react'

import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DetailBox from '../components/DetailBox'

import { styled, useTheme, useMediaQuery } from "@mui/material";

const Box = styled(MuiBox, { shouldForwardProp: prop => prop !== "position"})(({ theme, position }) => ({
  background: theme.colors.gradients.exp,
  width: '100px',
  height: '100px',
  padding: theme.spacing(4),
  borderRadius: '100%',
  marginBottom: ["left", "right"].includes(position) ? 0 : theme.spacing(4),
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(2),
  },
  [theme.breakpoints.up('xl')]: {
    width: "150px",
    height: "150px",
    padding: theme.spacing(2),
    marginBottom: theme.spacing(3),
  },
  [theme.breakpoints.up('xxl')]: {
    width: "200px",
    height: "200px",
    padding: theme.spacing(0),
    marginBottom: theme.spacing(3),
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const BoxWrapper = styled(MuiBox)(({ theme }) => ({
  background: theme.palette.white.main,
  padding: theme.spacing(2),
  [theme.breakpoints.up('xxl')]: {
    padding: theme.spacing(3.5),
  },
  [theme.breakpoints.up('xl')]: {
    padding: theme.spacing(3),
  },
  borderRadius: '100%',
  display: 'grid',
  placeItems: 'center'
}))

const Expereince = () => {

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

  const textPosition = isMobile ? "right" : "bottom"

  return (
    <DetailBox
      padding={paddingBasedOnScreen[screen]}
      firstText="Years of"
      firstTextProps={{
        variant: "h6",
        sx: {
          fontSize: {
            xs: "18px",
            sm: "16px", 
            md: '16px',
            lg: '18px', 
            xl : '26px', 
            xxl: '32px'
          },
          color: theme.palette.black.main,
        }
      }}
      secondText="Experience"
      secondTextProps={{
        variant: 'p',
        sx: {
          fontSize: {
            xs: "18px",
            sm: "16px",
            md: '16px',
            lg: "16px", 
            xl : "24px", 
            xxl: '30px'
          },
          color: theme.palette.secondary.main
        }
      }}
      textPosition={textPosition}
      autoHeight={isMobile}
    >
      <Box position={textPosition}>
        <BoxWrapper>
          <Typography variant='h3' fontSize={{ xl: 44, xxl : 60}}>5+</Typography>
        </BoxWrapper>
      </Box>
    </DetailBox>
  )
}

export default Expereince