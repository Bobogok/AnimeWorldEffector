import React from 'react';
import NotificationMenuProps from '../props/NotificationMenuProps';
import { Menu, MenuItem, Paper, Typography } from "@mui/material";
import { useStyles, menuPaperProps } from '../styles/NotificationMenuStyle';
import { useStore } from 'effector-react';
import { handleClickNotification, listNotifications } from '../../../../domains/header/store/HeaderStore';
import { clickOnNotification } from '../../../../infrastructure/api/header/HeaderApiEvents';

function NotificationMenu({}: NotificationMenuProps) {
  const classes = useStyles();
  const notifications = useStore(listNotifications);
  const isNotificationMenuOpen = useStore(handleClickNotification);

  const handleNotificationMenuClose = () => {
    clickOnNotification();
  };

  return (
    <Menu
      id="notification-menu"
      open={isNotificationMenuOpen}
      onClose={handleNotificationMenuClose}
      PaperProps={menuPaperProps}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      <div className={classes.header}>
        <Paper className={classes.card}>
          <Typography
            className={classes.text}
          >
            Ваши уведомления
          </Typography>
        </Paper>
      </div>
      {notifications.map((obj) => (
        <MenuItem key={obj.id} onClick={handleNotificationMenuClose}>
          {obj.items}
        </MenuItem>
      ))}
    </Menu>
  )
}

export default NotificationMenu;

