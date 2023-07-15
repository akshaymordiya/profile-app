"use client";

import React, { Fragment, useContext } from 'react'
import Scrollbar from '../Scrollbar';

import MuiDrawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiIconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Slide from '@mui/material/Slide';

import Logo from '../Logo';
import Profile from './Profile';
import SidebarMenu from './SidebarMenu';

import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {
  styled,
  useTheme,
  useMediaQuery
} from '@mui/material';

import Image from 'next/image';

import { SidebarContext } from "../../../../context/SidebarContext";

const openedMixin = (theme) => ({
  width: theme.sidebar.width,
  transition: theme.transitions.create(['width', 'opacity', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create(['width', 'opacity', 'transform'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: theme.sidebar.width,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    transition: '.3 all ease-in-out',
    [theme.breakpoints.down('lg')]: open ? {
      opacity: 1,
      transform: 'translateX(0)',
      boxShadow: theme.colors.shadows.card,
      height: '100%',
      zIndex: '999',
      position: 'fixed'
    } : {
      position: 'fixed',
      opacity: 0,
      transform:`translateX(-${theme.sidebar.width})`,
      height: '100%'
    },
    ...(open ? openedMixin(theme) : closedMixin(theme)),

    '& .MuiDrawer-paper': {
      border: 'none',
      borderRadius:  `0px ${theme.general.borderRadiusLg} ${theme.general.borderRadiusLg} 0px`,
      background: theme.colors.alpha.white[100],
      ...(open ? openedMixin(theme) : closedMixin(theme)) 
    }
  }),
);

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        color: ${theme.colors.secondary.main};
        position: relative;
        z-index: 7;
        height: 100%;
`
);

const IconButton = styled(MuiIconButton)(({ theme }) => ({
  color: theme.colors.secondary.main,
  transition: '0.3s all ease',
  '&:hover' :{
    color: theme.palette.primary.main,
    
    '& .MuiTouchRipple-root': {
      background: theme.palette.primary.light,
      zIndex: '-1'
    }
  }
}));

const DownloadText = styled(Typography)(({ theme }) => ({
  color: theme.colors.alpha.black[100],
  fontSize: '12px',
  fontWeight: 600,
  padding: `0 ${theme.spacing(2)}`
}))

const Sidebar = () => {
  const theme = useTheme();
  const { sidebarToogle, toogleSidebar } = useContext(SidebarContext);
  const closeSidebar = () => toogleSidebar();

  return (
    <Fragment>
      <Drawer
        anchor='left'
        open={sidebarToogle}
        onClose={closeSidebar}
        variant="permanent"
      >
        <SidebarWrapper>
          <Scrollbar>
            <Stack  my={3} mt={2} mx={2} spacing={!sidebarToogle ? 2 : 0} direction={sidebarToogle ? 'row' : 'column-reverse' } justifyContent="space-between" alignItems="center">                
              <Logo  />
              <IconButton
                aria-label="open menu"
                onClick={toogleSidebar}
              >
                <MenuOpenRoundedIcon fontSize='medium'/>
              </IconButton>
            </Stack>
            <Profile />
            <SidebarMenu />
          </Scrollbar>
        </SidebarWrapper>
        {sidebarToogle ? (
          <Stack direction="column" px={1} pb={2} alignItems="center" spacing={2}>
            <Image sx={{ border: '1px solid red'}} src="/bg/docs.png" width={80} height={80} alt='docs_png' />
            <DownloadText variant='p' >
              Click below to download my resume <br />
              and discover a qualified professional.
            </DownloadText>
            <Box px={2}>
              <Button variant='contained' sx={{ 
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}>Download Resume</Button>
            </Box>
          </Stack>
        ) : (
          <Box px={2} py={2} >
            <IconButton
               aria-label="download resume"
               onClick={toogleSidebar}
               sx={{ 
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
                background: theme.colors.primary.main,
                color: theme.colors.alpha.white[100],
                borderRadius: theme.general.borderRadius
              }}
            >
              <FileDownloadIcon />
            </IconButton>
          </Box>
        )}
      </Drawer>
    </Fragment>
  )
}

export default Sidebar