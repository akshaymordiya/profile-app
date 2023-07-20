import React from 'react'

import MuiBox from "@mui/material/Box";

import DetailBox from '../components/DetailBox'

import { styled, useTheme } from "@mui/material";

const Box = styled(MuiBox)(({ theme }) => ({
  background: theme.colors.gradients.meetup,
  position: "absolute",
  top: '-40%',
  left: '10%',
  overflow: 'hidden',
  borderRadius: '100%',
  width: '120%',
  height: '100%'
}));

const AvatarOne = styled('img')(() => ({
  position: "absolute",
  top: "10%",
  left: "0%",
  width: "30%",
  height: "30%"
}));

const AvatarTwo = styled("img")(() => ({
  position: "absolute",
  top: "42%",
  left: "40%",
  width: "30%",
  height: "30%"
}));

const AvatarThree = styled("img")(({ theme }) => ({
  position: "absolute",
  top: "15%",
  left: '81%',
  width: "30%",
  height: "30%",
  [theme.breakpoints.up("xl")]: {
    left: "85%"
  }
}))

const Meetup = () => {
  const theme = useTheme();

  return (
    <DetailBox
      firstText="50+ Meets"
      firstTextProps={{
        variant: "h6",
        sx: {
          fontSize: {
            xs: "16px",
            sm: "16px", 
            md: '16px',
            lg: '18px', 
            xl : '26px', 
            xxl:'32px'
          },
          color: theme.palette.black.main,
        }
      }}
      secondText="Signups"
      secondTextProps={{
        variant: 'p',
        sx: {
          fontSize: {
            xs: "16px",
            sm: "16px",
            md: '16px',
            lg: "16px",
            xl : "24px", 
            xxl: '30px'
          },
          color: theme.palette.secondary.main
        }
      }}
      forcedPosition="bottom"
    >
      <Box>
      </Box>
      <AvatarOne 
        src="/avatar/avatar-1.png" 
        alt="avatar-one" 
      />
      <AvatarTwo
        src="/avatar/avatar-2.png" 
        alt="avatar-two" 
      />
      <AvatarThree
        src="/avatar/avatar-3.png" 
        alt="avatar-three" 
      />
    </DetailBox>
  )
}

export default Meetup