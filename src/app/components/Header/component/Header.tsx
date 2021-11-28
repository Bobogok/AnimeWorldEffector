import React from 'react';
import axios from 'axios';
import HeaderProps from '../props/HeaderProps';
import {
  Toolbar,
  AppBar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  Box,
  Menu,
  Avatar,
  Divider,
  ListItemIcon,
  Button
  // Container
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logout from '@mui/icons-material/Logout';
// import Card from "./Card";
import { createStore, createEvent, createEffect } from 'effector';
import { useStore } from 'effector-react';

const addFavorite = createEvent();
const addNotification = createEvent();

const mockData = createEffect();

// @ts-ignore
mockData.use(async () => {
  const url = `https://run.mocky.io/v3/f4cd035f-76a1-4f31-bb6a-6dc3a06da00a`;
  const req = await axios(url);
  
  return req;
});

const $countOfFavorites = createStore(0)
  .on(
    // @ts-ignore
    mockData.doneData, (state, result) => result.data.favorites,
  )
  .on(addFavorite, n => n + 1);

const $countOfNotifications = createStore(0)
  .on(
    // @ts-ignore
    mockData.doneData, (state, result) => result.data.notification,
  )
  .on(addNotification, n => n + 1);

mockData.doneData.watch(result => {
  // @ts-ignore
  console.log(`Вызов выполнился успешно ${result.data}`)
});

mockData.failData.watch(error => {
  console.log(`Вызов завершился с ошибкой ${error.message}`)
});


function Header(props: HeaderProps) {
  const loading = useStore(mockData.pending);
  

  const favoriteCounter = useStore($countOfFavorites);
  const notificationCounter = useStore($countOfNotifications);

  console.log(favoriteCounter);

  React.useEffect(() => {
    mockData(null);
  }, [])
  

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);

  const handleClickNotification = (event: React.MouseEvent<HTMLElement>) => {
    addNotification();
  };

  const handleClickFavorite = (event: React.MouseEvent<HTMLElement>) => {
    addFavorite();
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
        anchorEl={anchorEl}
        open={isMenuOpen}
        onClose={handleMenuClose}
        onClick={handleMenuClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
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
  );

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ flexGrow: 1 }}>
            <Button component="a" color="inherit" sx={{ 
              backgroundColor: 'transparent', 
              "&:hover": {
                backgroundColor: 'transparent'
              }
            }}
            >
              <Typography variant="h6">
                AnimeWorld
              </Typography>
            </Button>
          </ Box>
          <Box>
            {loading ? 'Загрузка...' :
              <>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                  <Badge 
                    badgeContent={favoriteCounter} 
                    color="error"
                    onClick={handleClickFavorite}
                  >
                    <FavoriteIcon />
                  </Badge>
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <Badge 
                    badgeContent={notificationCounter} 
                    color="error"
                    onClick={handleClickNotification}
                  >
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
              </>
            }
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </>
  )
}

export default Header;

