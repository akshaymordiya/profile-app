import React, { Fragment } from 'react';

import MuiBox from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import {
  styled,
} from '@mui/material';

const forcedXPosition = {
  "bottom": "flex-end",
  "center": "center",
  "top": "flex-start",
}

const Box = styled(MuiBox, { shouldForwardProp: prop =>  ![
  "position", 
  "padding",
  "noChildrens"
].includes(prop)})(({ theme, padding, position, noChildrens }) => ({
  padding: padding ? padding : theme.spacing(2),
  position: 'relative',
  borderRadius: theme.general.borderRadiusLg,
  background: theme.palette.white.main,
  minHeight: (["left", "right"].includes(position)|| noChildrens) ? "fit-content" : "230px",
  height: (["left", "right"].includes(position)) ? "auto" : "100%",
  [theme.breakpoints.up('xl')]: {
    height: "100%"
  },
  overflow: 'hidden',
  boxShadow: theme.colors.shadows.cardSmooth
}));

const BoxWrapper = styled(MuiBox, { shouldForwardProp: prop => !["position", "forcePositionToBottom"].includes(prop) })(({ theme, position, forcedPosition }) => ({
  display: 'flex',
  flexDirection: position === "top" ? 'column-reverse' : 'column',
  justifyContent: forcedPosition ? forcedXPosition[forcedPosition] : 'space-between',
  alignItems: 'center',
  ...(forcedPosition && {
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
  forcedPosition = false,
  noChildrens = false
}) => {

  if(['left', 'right'].includes(textPosition)){
    return (
      <Box padding={padding} position={textPosition}>
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
    <Box padding={padding} position={textPosition} noChildrens={noChildrens}>
      <BoxWrapper position={textPosition} forcedPosition={forcedPosition}>
        {noChildrens ? (
          <Fragment>
            <Typography {...firstTextProps}>{firstText}</Typography>
            <Typography {...secondTextProps}>{secondText}</Typography>
          </Fragment>
        ) : (
          <Fragment>
            {children}
            <MuiBox sx={MuiBoxSxForYPosition}>
              <Typography {...firstTextProps}>{firstText}</Typography>
              <Typography {...secondTextProps}>{secondText}</Typography>
            </MuiBox>
          </Fragment>
        )}
      </BoxWrapper>
    </Box>
  )
}

export default DetailBox