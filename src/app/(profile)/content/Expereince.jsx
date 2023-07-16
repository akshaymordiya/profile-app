import React from 'react'

import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import DetailBox from '../components/DetailBox'

import { styled, useTheme, useMediaQuery } from "@mui/material";

const Box = styled(MuiBox)(({ theme }) => ({
  background: theme.colors.gradients.exp,
  width: '100px',
  height: '100px',
  padding: theme.spacing(4),
  borderRadius: '100%',
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(2),
  },
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}));

const BoxWrapper = styled(MuiBox)(({ theme }) => ({
  background: theme.palette.white.main,
  padding: theme.spacing(2),
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

  return (
    <DetailBox
      padding={paddingBasedOnScreen[screen]}
      firstText="Years of"
      firstTextProps={{
        variant: "h6",
        sx: {
          fontSize: '18px',
          color: theme.palette.black.main,
        }
      }}
      secondText="Experience"
      secondTextProps={{
        variant: 'p',
        sx: {
          fontSize: '16px',
          color: theme.palette.secondary.main
        }
      }}
      textPosition={isMobile ? "right" : "bottom"}
      autoHeight={isMobile}
    >
      <Box>
        <BoxWrapper>
          <Typography variant='h3'>5+</Typography>
        </BoxWrapper>
      </Box>
    </DetailBox>
  )
}

export default Expereince