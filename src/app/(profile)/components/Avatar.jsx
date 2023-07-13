import React from 'react'
import Image from 'next/image'

import MuiAvatar from '@mui/material/Avatar';
import MuiBox from '@mui/material/Box';
import { styled  } from "@mui/material";

const Box = styled(MuiBox)(({ theme }) => ({
  position: 'relative',
}));

const ImageWrapper = styled(Image)(({ theme }) => ({
  position: 'absolute',
  top: '-4.5px',
  left: '-4.5px'
}));

const Avatar = ({
  wrapWithDashedBorder = false,
  src,
  width = 36,
  height = 36,
  alt = "Profile Avatar"
}) => {

  if(!wrapWithDashedBorder){
    return (
      <MuiAvatar
        alt={alt}
        src={src}
        sx={{ width: `${width}px`, height: `${height}px` }}
      />
    )
  }

  return (
    <Box>
      <ImageWrapper src="/border.svg" width={width + 10} height={height + 10} alt={alt} />
      <MuiAvatar 
        alt={alt}
        src={src}
        sx={{ width: `${width}px`, height: `${height}px` }}
      />
    </Box>
  )
}

export default Avatar