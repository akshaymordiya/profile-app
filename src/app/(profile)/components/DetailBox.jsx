import React, { Fragment } from 'react';

import MuiBox from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
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
  "noChildrens",
  "showLoader"
].includes(prop)})(({ theme, padding, position, noChildrens, showLoader }) => ({
  padding: padding ? padding : theme.spacing(2),
  position: 'relative',
  borderRadius: theme.general.borderRadiusLg,
  background: showLoader ? theme.palette.white.light: theme.palette.white.main,
  minHeight: (["left", "right"].includes(position)|| noChildrens) ? "fit-content" : "230px",
  height: (["left", "right"].includes(position)) ? "auto" : "100%",
  [theme.breakpoints.up('xl')]: {
    height: "100%"
  },
  overflow: 'hidden',
  boxShadow: theme.colors.shadows.cardSmooth,
  ...(showLoader && {
    minHeight: (["left", "right"].includes(position) || noChildrens) ? "130px" : "230px",
    boxShadow: 'none'
  })
}));

const BoxWrapper = styled(MuiBox, { shouldForwardProp: prop => !["position", "forcedPosition"].includes(prop) })(({ theme, position, forcedPosition }) => ({
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
  alignItems: "center",
  width: "100%"
}

const MuiBoxSxForYPosition = {
  textAlign: 'center',
  width: "100%"
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
  noChildrens = false,
  showLoader = false
}) => {

  let TextSkeleton = <Fragment></Fragment>;

  if(showLoader){
    TextSkeleton = (
      <Fragment>
        <Skeleton variant='rectangular' animation="wave" sx={{ width: "100%", height: "16px", my: 2}} />
        <Skeleton variant='rectangular' animation="wave" sx={{ width: "100%", height: "16px", my: 2}} />
      </Fragment>
    )
  }

  if(['left', 'right'].includes(textPosition)){
    return (
      <Box padding={padding} position={textPosition} showLoader={showLoader}>
        <Grid container>
          <Grid item xs={6} md={6} lg= {6}>
            {textPosition === "left" ? (
              <MuiBox sx={{...MuiBoxSxForXPosition, ...(showLoader ? { px: 2 } : {})}}>
                {!showLoader ? (
                  <Fragment>
                    <Typography {...firstTextProps}>{firstText}</Typography>
                    <Typography {...secondTextProps}>{secondText}</Typography>
                  </Fragment>
                ) : TextSkeleton }
              </MuiBox>
            ) : showLoader ? (
              <Skeleton variant='rectangular' sx={{ height: "100%", width: "100%" }} />
            ) : children }
          </Grid>
          <Grid item xs={6} md={6} lg= {6}>
            {textPosition === "right" ? (
              <MuiBox sx={{...MuiBoxSxForXPosition, ...(showLoader ? { px: 2 } : {})}}>
                {!showLoader ? (
                  <Fragment>
                    <Typography {...firstTextProps}>{firstText}</Typography>
                    <Typography {...secondTextProps}>{secondText}</Typography>
                  </Fragment>
                ) : TextSkeleton }
              </MuiBox>
            ) : showLoader ? (
              <Skeleton variant='rectangular' sx={{ height: "100%", width: "100%"}} />
            ) : children }
          </Grid>
        </Grid>
      </Box>
    )
  }

  return (
    <Box padding={padding} position={textPosition} noChildrens={noChildrens} showLoader={showLoader}>
      <BoxWrapper position={textPosition} forcedPosition={forcedPosition}>
        {noChildrens ? (
          <Fragment>
            {showLoader ? TextSkeleton : (
              <Fragment>
                <Typography {...firstTextProps}>{firstText}</Typography>
                <Typography {...secondTextProps}>{secondText}</Typography>
              </Fragment>
            )}
          </Fragment>
        ) : (
          <Fragment>
            {showLoader ? <Skeleton variant='rectangular' animation="wave" sx={{ height: "100px", width: "100%"}} /> : children}
            <MuiBox sx={MuiBoxSxForYPosition}>
              {showLoader ? TextSkeleton : (
                <Fragment>
                  <Typography {...firstTextProps}>{firstText}</Typography>
                  <Typography {...secondTextProps}>{secondText}</Typography>
                </Fragment>
              )}
            </MuiBox>
          </Fragment>
        )}
      </BoxWrapper>
    </Box>
  )
}

export default DetailBox