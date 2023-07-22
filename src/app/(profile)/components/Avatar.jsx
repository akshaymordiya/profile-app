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

const Svg = styled('svg', { shouldForwardProp: prop => !["width", "height"].includes(prop)})(({ width, height, theme }) => ({
  height: `${height + 10}px`,
  width: `${width + 10}px`
}))

const Circle = styled('circle')(({ theme }) => ({
  fill: 'transparent',
  stroke: theme.colors.brown.main,
  strokeWidth: 3,
  strokeDasharray: '20, 25.5',
  strokeLinecap: 'round'
}));

const AvatarWrapper = styled(MuiAvatar, { shouldForwardProp: prop => !["width", "height"].includes(prop)})(({ theme, width, height }) => ({
  borderRadius: '50%',
  border: '2px solid transparent', // Ensure a border is there to reserve space for the dashes
  background: theme.colors.brown.light,
  boxShadow: theme.colors.shadows.cardSmooth,
  width: `${width}px`,
  height: `${height}px`,
  padding: theme.spacing(0.3)
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
      {/* <Svg width={width} height={height}>
        <circle 
          cx="55" 
          cy="55" 
          r="50" 
          fill="transparent" 
          stroke={theme.colors.brown.main}
          strokeWidth={3}  
          strokeDasharray='10, 12.5'
          strokeLinecap='round'
          width={width}
          height={height}
        />
        <foreignObject x="5" y="5" height={height} width={width}>
          <MuiAvatar 
            alt={alt}
            src={src}
            sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
          />
        </foreignObject>
      </Svg> */}
      {/* <ImageWrapper src="/border.svg" width={width + 10} height={height + 10} alt={alt} />
      <MuiAvatar 
        alt={alt}
        src={src}
        sx={{ width: `${width}px`, height: `${height}px`, ...sx }}
      /> */}

      <AvatarWrapper 
        alt={alt}
        src={src}
        width={width}
        height={height}
        sx={sx}
      />
    </Box>
  )
}

export default Avatar