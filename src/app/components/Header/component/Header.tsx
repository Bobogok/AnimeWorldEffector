import React from "react";
import HeaderProps from "../props/HeaderProps";
import {
  Toolbar,
  AppBar,
  Typography,
  Box,
  Button,
} from "@mui/material";
// import { useStyleProfile } from '../styles/HeaderStyles';
// import Card from "./Card";
import { 
    listNotifications,
    listFavorites,
    handleClickProfile,
    handleClickFavorites,
    handleClickNotification
  } from '../../../../domains/header/store/HeaderStore';
import { 
    notificationsData,
    favoritesData,
    clickOnProfile,
    clickOnNotification,
    clickOnFavorites,
    addNotification
  } from '../../../../infrastructure/api/header/HeaderApiEvents';

// компоненты
import ProfileIcon from '../../ProfileIcon';
import ProfileMenu from '../../ProfileMenu';
import NotificationIcon from '../../NotificationIcon';
import NotificationMenu from '../../NotificationMenu';
import FavoritesIcon from '../../FavoritesIcon';
import FavoritesMenu from '../../FavoritesMenu';


function Header({}: HeaderProps) {
  listFavorites.on(favoritesData.doneData, (_, list) => list.data);
  listNotifications.on(notificationsData.doneData, (_, list) => list.data);
  handleClickProfile.on(clickOnProfile, (state) => !state);
  handleClickFavorites.on(clickOnFavorites, (state) => !state);
  handleClickNotification.on(clickOnNotification, (state) => !state);

  React.useEffect(() => {
    favoritesData();
    notificationsData();
  }, []);

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button
              component="a"
              color="inherit"
              sx={{
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Typography variant="h6">AnimeWorld</Typography>
            </Button>
          </Box>
          <Box>
            <FavoritesIcon />
            <NotificationIcon />
            <ProfileIcon />
          </Box>
        </Toolbar>
      </AppBar>
      <ProfileMenu />
      <NotificationMenu />
      <FavoritesMenu />
    </>
  );
}

export default Header;

