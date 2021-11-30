import React from 'react';
import FavoritesMenuProps from '../props/FavoritesMenuProps';
import { ListItemText, Menu, MenuItem, Paper, Typography } from '@mui/material'
import { useStyles, menuPaperProps } from '../styles/FavoritesMenuStyle';
import { useStore } from 'effector-react';
import { countOfFavorites, listFavorites, handleClickFavorites } from '../../../../domains/header/store/HeaderStore';
import { clickOnFavorites } from '../../../../infrastructure/api/header/HeaderApiEvents';

function FavoritesMenu({}: FavoritesMenuProps) {
  const classes = useStyles();

  const amountFavorites = useStore(countOfFavorites);
  const favorites = useStore(listFavorites);
  const isFavoritesMenuOpen = useStore(handleClickFavorites);

  const handleFavoriteMenuClose = () => {
    clickOnFavorites();
  };

  return (
    <Menu
      id="favorites-menu"
      open={isFavoritesMenuOpen}
      onClose={handleFavoriteMenuClose}
      PaperProps={menuPaperProps}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {amountFavorites === 0 ? 
        <ListItemText 
          primary='Вам ничего не нравится?(' 
          sx={{
            padding: '0 8px'
          }}
        />
        :
        (
          <div>
            <div className={classes.header}>
              <Paper className={classes.card}>
                <Typography
                  className={classes.text}
                >
                  Ваши фавориты
                </Typography>
              </Paper>
            </div>
            {favorites.map((obj) => (
              <MenuItem key={obj.id} onClick={handleFavoriteMenuClose}>
                {obj.items}
              </MenuItem>
            ))}
          </div>
        )
      }
    </Menu>
  )
}

export default FavoritesMenu
