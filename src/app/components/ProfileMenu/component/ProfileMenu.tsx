import React from 'react';
import { Logout, PersonAdd, Settings } from '@mui/icons-material';
import { Avatar, Divider, ListItemIcon, Menu, MenuItem } from '@mui/material';
import ProfileMenuProps from '../props/ProfileMenuProps';
import { handleClickProfile } from '../../../../domains/header/store/HeaderStore';
import { useStore } from 'effector-react';
import { clickOnProfile } from '../../../../infrastructure/api/header/HeaderApiEvents';

function ProfileMenu({}: ProfileMenuProps) {
  const isMenuProfileOpen = useStore(handleClickProfile);
  
  const handleProfileMenuClose = () => {
    clickOnProfile();
  };
  
  return (
    <Menu
      open={isMenuProfileOpen}
      onClick={handleProfileMenuClose}
      // className={stylesMenuAvatar.sx}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: "visible",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 0,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "&:before": {
            content: '""',
            display: "block",
            position: "absolute",
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: "background.paper",
            transform: "translateY(-50%) rotate(45deg)",
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <MenuItem>
        <Avatar /> Profile
      </MenuItem>
      <Divider />
      <MenuItem>
        <ListItemIcon>
          <PersonAdd fontSize="small" />
        </ListItemIcon>
        Add another account
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Settings fontSize="small" />
        </ListItemIcon>
        Settings
      </MenuItem>
      <MenuItem>
        <ListItemIcon>
          <Logout fontSize="small" />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  )
}

export default ProfileMenu
