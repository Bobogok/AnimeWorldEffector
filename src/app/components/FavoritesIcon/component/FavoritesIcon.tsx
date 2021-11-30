import { Badge, CircularProgress, IconButton } from '@mui/material';
import React from 'react';
import FavoritesIconProps from '../props/FavoritesIconProps';
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useStore } from 'effector-react';
import { countOfFavorites } from '../../../../domains/header/store/HeaderStore';
import { clickOnFavorites, favoritesData } from '../../../../infrastructure/api/header/HeaderApiEvents';

function FavoritesIcon({}: FavoritesIconProps) {
  const loadingFavorites = useStore(favoritesData.pending);
  const amountFavorites = useStore(countOfFavorites);

  const handleClickToFavorites = () => {
    clickOnFavorites();
  };

  return (
    loadingFavorites ? (
      <IconButton size="large">
        <CircularProgress sx={{ color: "#fff" }} size={20} />
      </IconButton>
    ) : (
      <IconButton
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
        onClick={handleClickToFavorites}
      >
        <Badge
          badgeContent={amountFavorites}
          color="error"
        >
          <FavoriteIcon />
        </Badge>
      </IconButton>
    )
  )
}

export default FavoritesIcon;
