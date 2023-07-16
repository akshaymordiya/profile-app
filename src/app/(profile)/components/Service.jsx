import React from 'react';
import Image from 'next/image';

import MuiBox from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { styled } from "@mui/material";

const BoxBorder = styled(MuiBox)(({ theme }) => ({
  background: theme.colors.gradients.border,
  padding: `${theme.spacing(0.3)} ${theme.spacing(0.4)}`,
  borderRadius: theme.general.borderRadiusXl,
  boxShadow: theme.colors.shadows.cardSmooth,
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
  borderRadius: theme.general.borderRadiusXl,
  textAlign: "center",
  height: '250px',
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }), 
  '&:hover' : {
    background: theme.palette.primary.main,
    color: theme.palette.white.main
  }
}));

const ImageContainer = styled('div')(({ theme }) => ({
  position: 'relative',
  width: '60px',
  height: '60px',
  borderRadius: '100%',
  background: theme.palette.primary.light
}));

const Service = ({
  service
}) => {
  return (
    <BoxBorder>
      <Box>
        <ImageContainer>
          <Image src={service.icon} width={50} height={50} alt={service.title} />
        </ImageContainer>
        <Typography variant='h4' mt={2} mb={0.9} fontSize={18} color="black" >{service.title}</Typography>
        <Typography>{service.excert}</Typography>
      </Box>
    </BoxBorder>
  )
}

export default Service