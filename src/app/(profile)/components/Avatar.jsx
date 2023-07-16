import React from 'react'
import Image from 'next/image'

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import { styled, useTheme  } from "@mui/material";

const Box = styled(MuiBox)(() => ({
  position: 'relative',
}));

const ImageWrapper = styled(Image)(() => ({
  position: 'absolute',
  top: '-4.5px',
  left: '-4.5px'
}));

const Avatar = ({
  wrapWithDashedBorder = false,
  src,
  width = 36,
  height = 36,
  disableShadow = false,
  sx = {},
  alt = "Profile Avatar"
}) => {

  const theme = useTheme();

  if(!wrapWithDashedBorder){
    console.log("running");
    return (
      <MuiAvatar
        alt={alt}
        src={src}
        sx={{ 
          width: `${width}px`, height: `${height}px`,
          boxShadow: disableShadow ? 'none' : theme.colors.shadows.card,
          ...sx
        }}
      />
    )
  }

  return (
    <Box>
      <ImageWrapper src="/border.svg" width={width + 10} height={height + 10} alt={alt} />
      <MuiAvatar 
        alt={alt}
        src={src}
        sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
      />
    </Box>
  )
}

export default Avatar