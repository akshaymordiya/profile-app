import React, { Fragment } from 'react';

import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Skeleton from "@mui/material/Skeleton";

import { styled } from "@mui/material";

const BoxBorder = styled(MuiBox, { shouldForwardProp: prop => prop !== "showLoader" })(({ theme, showLoader }) => ({
  padding: `${theme.spacing(0.3)} ${theme.spacing(0.4)}`,
  ...(!showLoader && {
    background: theme.colors.gradients.border,
    '&:hover': {
      background: 'transparent',
      boxShadow: 'none'
    }
  }),
  borderRadius: theme.general.borderRadiusXl,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  cursor: 'pointer',
  
}));

const Box = styled(MuiBox, { shouldForwardProp: prop => prop !== "showLoader"})(({ theme, showLoader }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  ...(!showLoader ? {
    background: theme.colors.white.main,
    boxShadow: theme.colors.shadows.cardSmooth,
    '&:hover' : {
      background: theme.palette.primary.light,
      color: theme.palette.primary.main
    }
  } : {
    background: theme.colors.white.light,
  }),
  borderRadius: theme.general.borderRadiusXl,
  textAlign: "center",
  minHeight: "250px",
  height: "calc(100vw / 6)",
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }), 
  
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '30%',
  height: '30%',
  borderRadius: '100%',
  background: theme.palette.primary.light,
  [theme.breakpoints.down('sm')]: {
    width: '24%'
  }
}));

const Image = styled('img')(() => ({
  width: "80%",
  height: "80%"
}))

const Service = ({
  service,
  showLoader
}) => {
  return (
    <BoxBorder showLoader={showLoader}>
      <Box showLoader={showLoader}>
        {showLoader ? (
          <Fragment>
            <Skeleton variant='circular' animation="wave" sx={{ width : "70px", height: "70px", borderRadius: "50%"}} />
            <Skeleton variant='rectangular' animation="wave" sx={{ width : "80%", height: "16px", my: 2}} />
            <Skeleton variant='rectangular' animation="wave" sx={{ width : "95%", height: "12px", my: 0.5}} />
            <Skeleton variant='rectangular' animation="wave" sx={{ width : "80%", height: "12px", my:0.5}} />
            <Skeleton variant='rectangular' animation="wave" sx={{ width : "60%", height: "12px", my: 0.5}} />
          </Fragment>
        ) : (
          <Fragment>
            <ImageContainer>
              <Image src={service.icon} alt={service.title} />
            </ImageContainer>
            <Typography variant='h4' mt={2} mb={0.9} fontSize={{ lg: 18, xl: 26}} color="black" >{service.title}</Typography>
            <Typography mt={{ xl: 1}} fontSize={{ lg: 14 , xl : 18}}>{service.excert}</Typography>
          </Fragment>
        )}
      </Box>
    </BoxBorder>
  )
}

export default Service