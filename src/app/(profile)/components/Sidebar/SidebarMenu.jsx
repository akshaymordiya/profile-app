
import React, { useContext} from 'react';
import { usePathname } from 'next/navigation'

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MuiListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { createSvgIcon } from '@mui/material/utils';

import {
  styled,
} from '@mui/material';
import { SidebarContext } from '@/context/SidebarContext';

import NextLink from 'next/link';

const MenuWrapper = styled(Box)(
  ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(0)} ${theme.spacing(1.2)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }
`
);

const AboutIcon = createSvgIcon(
  <svg width="30" height="30" viewBox="0 0 30 30" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
    <g id="dashicons:businessman">
      <path id="Vector" d="M25.5 25.35V21.6C25.5 20.55 25.35 19.5 24.75 18.45C24.15 17.4 23.4 16.5 22.35 15.9C21.3 15.15 19.05 15 18 15L15.6 17.55L16.5 19.5V24L15 25.65L13.5 24V19.5L14.55 17.55L12 15C10.8 15 8.55 15.15 7.5 15.9C6.45 16.5 5.85 17.4 5.25 18.45C4.65 19.5 4.5 20.4 4.5 21.6V25.35C4.5 25.35 8.4 27 15 27C21.6 27 25.5 25.35 25.5 25.35ZM15 3.15002C12.15 3.15002 10.5 5.85002 10.95 8.85002C11.4 11.85 12.9 13.95 15 13.95C17.1 13.95 18.6 11.85 19.05 8.85002C19.5 5.70002 17.85 3.15002 15 3.15002Z"/>
    </g>
  </svg>,
  'about'
)

const ResumeIcon = createSvgIcon(
  <svg width="30" height="30" viewBox="0 0 30 30" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
    <g id="dashicons:id">
      <path id="Vector" d="M27 24H3V6H27V24ZM10.575 12.795C10.77 12.69 10.935 12.57 11.07 12.435C11.205 12.285 11.325 12.12 11.43 11.925C11.535 11.715 11.625 11.535 11.685 11.37C11.745 11.205 11.79 11.04 11.835 10.86L11.925 10.5C11.925 10.44 11.94 10.395 11.94 10.365C12.015 9.885 11.985 9.45 11.88 9.015C11.76 8.595 11.535 8.235 11.19 7.935C10.845 7.65 10.425 7.5 9.9 7.5C9.6 7.5 9.315 7.56 9.06 7.665C8.805 7.785 8.595 7.935 8.445 8.115C8.28 8.31 8.145 8.52 8.04 8.775C7.935 9.015 7.875 9.27 7.86 9.54C7.845 9.81 7.86 10.08 7.875 10.365L7.905 10.5C7.92 10.59 7.95 10.725 7.995 10.875C8.04 11.025 8.085 11.19 8.145 11.37C8.205 11.55 8.295 11.745 8.4 11.925C8.52 12.105 8.64 12.27 8.775 12.42C8.91 12.57 9.075 12.705 9.285 12.795C9.48 12.885 9.705 12.93 9.93 12.93C10.155 12.93 10.38 12.885 10.575 12.795ZM25.5 13.5V7.5H18V13.5H25.5ZM9.93 14.745L7.86 13.425C7.245 13.425 6.675 13.59 6.15 13.905C5.625 14.235 5.22 14.655 4.935 15.18C4.65 15.69 4.5 16.23 4.5 16.785V18.66L4.8 18.735C4.995 18.795 5.265 18.87 5.625 18.945C5.985 19.035 6.39 19.125 6.825 19.2C7.26 19.29 7.755 19.35 8.325 19.41C8.88 19.47 9.42 19.5 9.93 19.5C10.44 19.5 10.965 19.47 11.535 19.41C12.105 19.35 12.585 19.275 13.005 19.2C13.41 19.125 13.815 19.05 14.235 18.945C14.64 18.855 14.91 18.78 15.045 18.75C15.18 18.705 15.285 18.675 15.36 18.66V16.785C15.36 16.245 15.21 15.705 14.895 15.18C14.58 14.655 14.16 14.22 13.635 13.89C13.11 13.56 12.555 13.395 11.97 13.395L9.93 14.745ZM25.5 16.5V15H18V16.5H25.5ZM25.5 19.5V18H18V19.5H25.5ZM25.5 22.5V21H4.5V22.5H25.5Z" />
    </g>
  </svg>,
  'resume'
)

const WorkIcon = createSvgIcon(
  <svg width="30" height="30" viewBox="0 0 30 30" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
    <g id="dashicons:media-code">
      <path id="Vector" d="M18 3L24 9V27H6V3H18ZM13.5 19.5L10.5 16.5L13.5 13.5L12 12L7.5 16.5L12 21L13.5 19.5ZM18 21L22.5 16.5L18 12L16.5 13.5L19.5 16.5L16.5 19.5L18 21Z" />
    </g>
  </svg>,
  'work'
)

const ConsultIcon = createSvgIcon(
  <svg width="31" height="30" viewBox="0 0 31 30" fill='currentColor' xmlns="http://www.w3.org/2000/svg">
    <g id="mdi:calendar-edit-outline" opacity="0.6">
      <path id="Vector" d="M27.845 16.6875L26.595 17.9375L24.0325 15.4375L25.2825 14.1875C25.5325 13.925 25.9575 13.9125 26.245 14.1875L27.845 15.7875C28.0825 16.0375 28.0825 16.4375 27.845 16.6875ZM15.72 23.675V26.25H18.295L25.87 18.6L23.3075 16.1L15.72 23.675ZM6.96997 23.75H13.22V26.25H6.96997C6.30693 26.25 5.67104 25.9866 5.2022 25.5178C4.73336 25.0489 4.46997 24.413 4.46997 23.75L4.46997 6.25C4.46997 4.875 5.59497 3.75 6.96997 3.75L8.21997 3.75V1.25L10.72 1.25V3.75L20.72 3.75V1.25L23.22 1.25V3.75H24.47C25.133 3.75 25.7689 4.01339 26.2377 4.48223C26.7066 4.95107 26.97 5.58696 26.97 6.25V11.25L6.96997 11.25L6.96997 23.75ZM6.96997 6.25V8.75L24.47 8.75V6.25L6.96997 6.25Z"/>
    </g>
  </svg>,
  'consult'
)

const menuItems = [
  {
    text: "About Me",
    icon: AboutIcon,
    link: '/'
  },
  {
    text: "Resume",
    icon: ResumeIcon,
    link: '/resume'
  },
  {
    text: "Recent Works",
    icon: WorkIcon,
    link: '/work'
  },
  {
    text: "Consult Now",
    icon: ConsultIcon,
    link: '/consult'
  }
]

const ListItemButton = styled(MuiListItemButton, { shouldForwardProp: (prop) => prop !== 'open'})(({ open }) => ({
    display: 'flex',
    justifyContent: "center",
    alignItems: "center",
  ...(!open ? {
    '& .MuiListItemIcon-root' : {
      marginLeft: '-2px',
      minWidth: '0px'
    }
  } : {
    '& .MuiListItemIcon-root' : {
      minWidth: '50px'
    }
  })
}));

const SidebarMenu = () => {
  const { sidebarToogle } = useContext(SidebarContext);
  const pathname = usePathname()

  return (
    <MenuWrapper>
      <nav aria-label="navigation menu sidebar">
        <List>
          {menuItems.map(({ 
            text,
            icon: Icon,
            link
          }) => (
            <NextLink key={link} href={link}>
              <ListItem disablePadding>
                <ListItemButton className={link === pathname ? 'active' : ''} open={sidebarToogle}>
                  <ListItemIcon>
                    <Icon />
                  </ListItemIcon>
                  {sidebarToogle && (
                    <ListItemText primary={text} />
                  )}
                </ListItemButton>
              </ListItem>
            </NextLink>
          ))}
        </List>
      </nav>
    </MenuWrapper>
  )
}

export default SidebarMenu