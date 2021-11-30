import { createStore } from "effector";
import { HeaderStoreNotificationsEntity, HeaderStoreFavoritesEntity } from '../entity/HeaderStoreEntity';

export const listNotifications = createStore<HeaderStoreNotificationsEntity[]>([]);

export const listFavorites = createStore<HeaderStoreFavoritesEntity[]>([]);

export const countOfNotifications = listNotifications.map(state => state.length);

export const countOfFavorites = listFavorites.map(state => state.length);

export const handleClickProfile = createStore<boolean>(false);

export const handleClickFavorites = createStore<boolean>(false);

export const handleClickNotification = createStore<boolean>(false);