import React, { Fragment } from 'react'

import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import Skeleton from "@mui/material/Skeleton";

import { styled } from "@mui/material";

const BrandTypography = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  color: theme.colors.alpha.black[100],
  fontWeight: 500,
  fontStyle: 'normal',
  lineHeight: theme.spacing(6.77),
  marginBottom: theme.spacing(1.2),
  [theme.breakpoints.up('xxl')]: {
    fontSize: "60px",
    lineHeight: theme.spacing(9.77),
    marginBottom: theme.spacing(2),
  },

  '& span' :{
    color: theme.palette.primary.main,
    fontWeight: 600
  }
}));

const BrandSubText = styled(Typography)(({ theme }) => ({
  color: theme.colors.alpha.black[100],
  fontSize: '20px',
  fontWeight: 500,
  marginBottom: theme.spacing(1.5),
  [theme.breakpoints.up('xxl')]:{
    fontSize: '30px',
    marginBottom: theme.spacing(2.1),
  }
}));

const Button = styled(MuiButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: theme.colors.black.main,
  color: theme.colors.white.main,
  padding: `${theme.spacing(1.2)} ${theme.spacing(3)}`,
  
  [theme.breakpoints.up('xxl')]: {
    marginTop: theme.spacing(4),
    padding: `${theme.spacing(2)} ${theme.spacing(4)}`,
    fontSize: theme.spacing(2)
  },

  '&:hover': {
    color: theme.colors.primary.main
  }
}));

const Introduction = ({
  showLoader = false
}) => {

  if(showLoader){
    return (
      <Fragment>
        <Skeleton variant='text' animation="pulse" sx={{ height: "60px"}} />
        <Skeleton variant='text' animation="pulse" sx={{ height: "60px" , width: "70%"}} />
        <Skeleton variant='text' animation="pulse" sx={{ height: "40px" , width: "83%"}} />
        <Skeleton variant='text' animation="pulse" sx={{ height: "40px", width: "50%"}} />
        <Skeleton variant='text' animation="pulse" sx={{ height: "80px", width: "25%"}} />
      </Fragment>
    )
  }

  return (
    <Fragment>
      <BrandTypography variant="h1">
        Unveiling Excellence: Discover <br />
        the Artistry of <span>Akshay Moradiya</span>
      </BrandTypography>
      <BrandSubText variant="h6" >
        - A Journey Through Creativity and Innovation
      </BrandSubText>
      <Typography variant="h6" fontWeight={400} color="secondary" fontSize={{xl: 22, xxl: 24}}>
      Embark on a Transformative Journey: Unveiling the Extraordinary Portfolio of  Mine - Where Creativity, Innovation, and Passion Converge.
      </Typography>
      <Button>See Portfolio</Button>
    </Fragment>
  )
}

export default Introduction