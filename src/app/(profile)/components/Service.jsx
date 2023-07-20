import React from 'react';

import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material";

const BoxBorder = styled(MuiBox)(({ theme }) => ({
  background: theme.colors.gradients.border,
  padding: `${theme.spacing(0.3)} ${theme.spacing(0.4)}`,
  borderRadius: theme.general.borderRadiusXl,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  cursor: 'pointer',
  '&:hover': {
    background: 'transparent',
    boxShadow: 'none'
  }
}));

const Box = styled(MuiBox)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: `${theme.spacing(3)} ${theme.spacing(2)}`,
  background: theme.colors.white.main,
  boxShadow: theme.colors.shadows.cardSmooth,
  borderRadius: theme.general.borderRadiusXl,
  textAlign: "center",
  minHeight: "250px",
  height: "calc(100vw / 6)",
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }), 
  '&:hover' : {
    background: theme.palette.primary.light,
    color: theme.palette.primary.main
  }
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
  service
}) => {
  return (
    <BoxBorder>
      <Box>
        <ImageContainer>
          <Image src={service.icon} alt={service.title} />
        </ImageContainer>
        <Typography variant='h4' mt={2} mb={0.9} fontSize={{ lg: 18, xl: 26}} color="black" >{service.title}</Typography>
        <Typography mt={{ xl: 1}} fontSize={{ lg: 14 , xl : 18}}>{service.excert}</Typography>
      </Box>
    </BoxBorder>
  )
}

export default Service