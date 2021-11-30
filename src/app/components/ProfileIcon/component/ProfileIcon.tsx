import React from 'react';
import ProfileIconProps from '../props/ProfileIconProps';
import { AccountCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { clickOnProfile } from '../../../../infrastructure/api/header/HeaderApiEvents';


const ProfileIcon = ({}: ProfileIconProps) => {

  const handleClickToProfile = () => {
    clickOnProfile();
  };

  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="account of current user"
      aria-controls="primary-search-account-menu"
      aria-haspopup="true"
      onClick={handleClickToProfile}
      color="inherit"
    >
      <AccountCircle />
    </IconButton>
  )
}

export default ProfileIcon;
