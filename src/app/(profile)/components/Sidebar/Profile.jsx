import React, { Fragment, useContext } from 'react';

import Box from "@mui/material/Box";
import TypoGraphy from "@mui/material/Typography";
import MuiChip from "@mui/material/Chip";

import Avatar from '../Avatar';

import StarIcon from '@mui/icons-material/Star';

import {
  styled
} from '@mui/material';

import { georama, farsan } from '@/fonts/utils';
import { SidebarContext } from '@/context/SidebarContext';

const BrandTitle = styled(TypoGraphy)(({ theme }) => ({
  fontSize: '1.2rem',
  fontFamily: '--font-georama',
  color: theme.colors.black.main,
  marginTop: theme.spacing(3),
  fontWeight: 600
}))

const BrandTag = styled(TypoGraphy)(({ theme }) => ({
  fontSize: '1rem',
  fontFamily: '--font-farsan',
  color: theme.colors.black.main,
  marginTop: theme.spacing(0.3),
  fontWeight: 500
}))

const Chip = styled(MuiChip)(({ theme }) => ({
  marginTop: theme.spacing(1),
  backgroundColor: theme.colors.black.main,
  color: theme.colors.white.light,
  '& .MuiChip-icon': {
    color: theme.colors.brown.main
  }
}));

const Profile = () => {
  const { sidebarToogle } = useContext(SidebarContext);
  const profileAspectRatio = sidebarToogle ? 70 : 30;
  return (
    <Box mt={1} mb={3} 
      display="flex" 
      flexDirection="column" 
      justifyContent="center" 
      alignItems="center"
    >
      <Avatar
        wrapWithDashedBorder
        src="/avatar/main.png"
        width={profileAspectRatio}
        height={profileAspectRatio}
        alt="Akshay Moradiya profile avatar"
      />
      {sidebarToogle && (
        <Fragment>
          <BrandTitle className={georama.className} variant="h4">Akshay Moradiya</BrandTitle>
          <BrandTag className={farsan.className}>Software Engineer</BrandTag>
          <Chip
            size='small'
            label="9.8"
            icon={<StarIcon fontSize='small' />}
          />
        </Fragment>
      )}
    </Box>
  )
}

export default Profile