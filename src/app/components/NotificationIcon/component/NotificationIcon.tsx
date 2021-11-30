import React from 'react';
import NotificationIconProps from '../props/NotificationIconProps';
import { Badge, CircularProgress, IconButton } from '@mui/material';
import Notifications from "@mui/icons-material/Notifications";
import { useStore } from 'effector-react';
import { countOfNotifications } from '../../../../domains/header/store/HeaderStore';
import { clickOnNotification, notificationsData } from '../../../../infrastructure/api/header/HeaderApiEvents';

function NotificationIcon({}: NotificationIconProps) {
  const loadingNotification = useStore(notificationsData.pending);
  const amountNotifications = useStore(countOfNotifications);

  const handleClickToNotifications = () => {
    clickOnNotification();
  };

  return (
    loadingNotification ? (
      <IconButton size="large">
        <CircularProgress sx={{ color: "#fff" }} size={20} />
      </IconButton>
    ) : (
      <>
        <IconButton
          size="large"
          aria-label={`show ${amountNotifications} new notifications`}
          color="inherit"
          onClick={handleClickToNotifications}
        >
          <Badge
            badgeContent={amountNotifications}
            color="error"
          >
            <Notifications />
          </Badge>
        </IconButton>
      </>
    )
  )
}

export default NotificationIcon
