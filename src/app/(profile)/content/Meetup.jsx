import React from 'react'
import Image from "next/image";

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
  width: '230px',
  height: '230px'
}));

const AvatarOne = styled(Image)(() => ({
  position: "absolute",
  top: "10%",
  left: "0%"
}));

const AvatarTwo = styled(Image)(() => ({
  position: "absolute",
  top: "42%",
  left: "40%"
}));

const AvatarThree = styled(Image)(() => ({
  position: "absolute",
  top: "15%",
  right: "-15%"
}))

const Meetup = () => {
  const theme = useTheme();

  return (
    <DetailBox
      firstText="50+ Meets"
      firstTextProps={{
        variant: "h6",
        sx: {
          fontSize: '18px',
          color: theme.palette.black.main,
        }
      }}
      secondText="Signups"
      secondTextProps={{
        variant: 'p',
        sx: {
          fontSize: '16px',
          color: theme.palette.secondary.main
        }
      }}
      forcePositionToBottom
    >
      <Box>
      </Box>
      <AvatarOne 
        src="/avatar/avatar-1.png" 
        width={70} 
        height={70} 
        alt="avatar-one" 
      />
      <AvatarTwo
        src="/avatar/avatar-2.png" 
        width={70} 
        height={70} 
        alt="avatar-one" 
      />
      <AvatarThree
        src="/avatar/avatar-3.png" 
        width={70} 
        height={70} 
        alt="avatar-one" 
      />
    </DetailBox>
  )
}

export default Meetup