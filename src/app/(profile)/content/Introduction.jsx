import React, { Fragment } from 'react'

import Typography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";

import { styled } from "@mui/material";

const BrandTypography = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  color: theme.colors.alpha.black[100],
  fontWeight: 500,
  fontStyle: 'normal',
  lineHeight: theme.spacing(6.77),
  marginBottom: theme.spacing(1.2),

  '& span' :{
    color: theme.palette.primary.main,
    fontWeight: 600
  }
}));

const BrandSubText = styled(Typography)(({ theme }) => ({
  color: theme.colors.alpha.black[100],
  fontSize: '20px',
  fontWeight: 500,
  marginBottom: theme.spacing(1.5)
}));

const Button = styled(MuiButton)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: theme.colors.black.main,
  color: theme.colors.white.main,
  padding: `${theme.spacing(1.2)} ${theme.spacing(3)}`,

  '&:hover': {
    color: theme.colors.primary.main
  }
}));

const Introduction = () => {
  return (
    <Fragment>
      <BrandTypography variant="h1">
        Unveiling Excellence: Discover <br />
        the Artistry of <span>Akshay Moradiya</span>
      </BrandTypography>
      <BrandSubText variant="h6" >
        - A Journey Through Creativity and Innovation
      </BrandSubText>
      <Typography variant="h6" fontWeight={400} color="secondary">
      Embark on a Transformative Journey: Unveiling the Extraordinary Portfolio of  Mine - Where Creativity, Innovation, and Passion Converge.
      </Typography>
      <Button>See Portfolio</Button>
    </Fragment>
  )
}

export default Introduction