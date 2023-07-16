import React from 'react';

import MuiBox from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {
  styled,
} from '@mui/material';

const Box = styled(MuiBox, { shouldForwardProp: prop =>  !["padding", "autoHeight"].includes(prop)})(({ theme, padding, autoHeight }) => ({
  padding: padding ? padding : theme.spacing(2),
  position: 'relative',
  borderRadius: theme.general.borderRadiusLg,
  background: theme.palette.white.main,
  height: autoHeight ? "fit-content" : "230px",
  overflow: 'hidden'
}));

const BoxWrapper = styled(MuiBox, { shouldForwardProp: prop => !["position", "forcePositionToBottom"].includes(prop) })(({ position, forcePositionToBottom }) => ({
  display: 'flex',
  flexDirection: position === "top" ? 'column-reverse' : 'column',
  justifyContent: forcePositionToBottom ? "flex-end" : 'space-between',
  alignItems: 'center',
  ...(forcePositionToBottom && {
    height: '100%'  
  })
}));

const MuiBoxSxForXPosition = {
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: "center"
}

const MuiBoxSxForYPosition = {
  textAlign: 'center'
}

const DetailBox = ({
  children,
  textPosition = "bottom",
  firstText,
  firstTextProps,
  secondText,
  secondTextProps,
  padding = null,
  autoHeight = false,
  forcePositionToBottom = false
}) => {

  if(['left', 'right'].includes(textPosition)){
    return (
      <Box padding={padding} autoHeight={autoHeight}>
        <Grid container>
          <Grid item xs={6} md={6} lg= {6}>
            {textPosition === "left" ? (
              <MuiBox sx={MuiBoxSxForXPosition}>
                <Typography {...firstTextProps}>{firstText}</Typography>
                <Typography {...secondTextProps}>{secondText}</Typography>
              </MuiBox>
            ) : children }
          </Grid>
          <Grid item xs={6} md={6} lg= {6}>
            {textPosition === "right" ? (
              <MuiBox sx={MuiBoxSxForXPosition}>
                <Typography {...firstTextProps}>{firstText}</Typography>
                <Typography {...secondTextProps}>{secondText}</Typography>
              </MuiBox>
            ) : children}
          </Grid>
        </Grid>
      </Box>
    )
  }

  return (
    <Box padding={padding} autoHeight={autoHeight} >
      <BoxWrapper position={textPosition} forcePositionToBottom={forcePositionToBottom}>
        {children}
        <MuiBox sx={MuiBoxSxForYPosition}>
          <Typography {...firstTextProps}>{firstText}</Typography>
          <Typography {...secondTextProps}>{secondText}</Typography>
        </MuiBox>
      </BoxWrapper>
    </Box>
  )
}

export default DetailBox