"use client";

import React, { Fragment, useContext } from 'react'
import Scrollbar from './Scrollbar';

import MuiDrawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import MuiIconButton from "@mui/material/IconButton";

import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

import {
  styled,
} from '@mui/material';

import { SidebarContext } from "../../../context/SidebarContext";
import Logo from './Logo';

const openedMixin = (theme) => ({
  width: theme.sidebar.width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
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
    [theme.breakpoints.down('lg')]: {
      display: 'none'
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
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
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

const Sidebar = () => {

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
            <Box mt={3}>
              <Stack mx={2} direction="row" justifyContent="space-between" alignItems="center">                
                <Logo visible={sidebarToogle} />
                <IconButton
                  aria-label="open menu"
                  onClick={toogleSidebar}
                  style={{

                  }}
                >
                  <MenuOpenRoundedIcon fontSize='medium'/>
                </IconButton>
              </Stack>
            </Box>
            {/* <SidebarMenu /> */}
          </Scrollbar>
        </SidebarWrapper>
      </Drawer>
    </Fragment>
  )
}

export default Sidebar