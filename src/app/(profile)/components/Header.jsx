import React, { useContext } from 'react'

import MuiBox from "@mui/material/Box";
import MuiStack from "@mui/material/Stack";
import TextField from '@mui/material/TextField';
import MuiAutocomplete from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import InputAdornment from "@mui/material/InputAdornment";

import Avatar from './Avatar';

import ShareIcon from '@mui/icons-material/Share';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';

import { styled, useMediaQuery } from "@mui/material";
import { SidebarContext } from '@/context/SidebarContext';

const Box = styled(MuiBox, { shouldForwardProp : (prop) => prop !== "open"})(({ theme }) => ({
  display: "block",
  width: "100%",
  height: theme.header.height,
  padding: `0 ${theme.spacing(4)}`,
  [theme.breakpoints.down('lg')]: {
    padding: `0 ${theme.spacing(2)}`
  },
  [theme.breakpoints.down('sm')]: {
    margin: `${theme.spacing(3)} 0`,
    padding: `0 ${theme.spacing(2)}`,
    height: 'fit-content'
  },
}));

const Stack = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  height: '100%',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column-reverse',
    gap: theme.spacing(2)
  },
}));

const StackWrapped = styled(MuiStack)(({ theme }) => ({
  width: '100%',
  justifyContent: 'flex-end',
  [theme.breakpoints.down('sm')]: {
    marginLeft: '0px !important',
    justifyContent: 'space-between'
  },
}));

const Autocomplete = styled(MuiAutocomplete)(({ theme }) => ({
  width: '55ch',
  marginLeft: '-15px',
  background: theme.colors.alpha.white[100],
  borderRadius: theme.general.borderRadius,
  border: 'none',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: '0',
  }
}));

const Header = () => {
  const { toogleSidebar } = useContext(SidebarContext);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme => theme.breakpoints.up('md') && theme.breakpoints.down('lg'));

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between" 
        alignItems="center"
        spacing={4}
        >
        <MuiStack sx={{ width: '100%' }} direction="row" spacing={2}>
          {!isMobile && isTablet && (
            <IconButton
              aria-label="open menu"
              onClick={toogleSidebar}
            >
              <MenuOpenRoundedIcon fontSize='medium'/>
            </IconButton>
          )}
          <Autocomplete
            id="free-solo-demo"
            freeSolo
            fullWidth
            disableClearable
            options={[]}
            renderInput={(params) => 
              <TextField {...params} 
                hiddenLabel 
                fullWidth 
                size='small' 
                label="Search By tech keywords"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchRoundedIcon fontSize='small' />
                    </InputAdornment>
                  ),
                }}
            />}   
          />
        </MuiStack>
        <StackWrapped direction="row" spacing={2} justifyContent="space-between">
          {isMobile && (
            <IconButton
              aria-label="open menu"
              onClick={toogleSidebar}
            >
              <MenuOpenRoundedIcon fontSize='medium'/>
            </IconButton>
          )}
          <MuiStack spacing={2} direction="row" justifyContent="space-around" alignItems="center">
            <IconButton>
              <ShareIcon />
            </IconButton>
            <IconButton>
              <EditCalendarRoundedIcon />
            </IconButton>
            <Avatar
              src="/avatar/main.png"
              width={40}
              height={40}
              alt='Akshay Moradiya'
            />
          </MuiStack>
        </StackWrapped>
      </Stack>
    </Box>
  )
}

export default Header