import axios, { AxiosError, AxiosResponse } from "axios";
import { HeaderStoreNotificationsEntity, HeaderStoreFavoritesEntity } from '../../../domains/header/entity/HeaderStoreEntity';
import { createEvent, createEffect } from "effector";


const getNotifications = async () => {
  const url = `https://61a47f74d5e83300172923f7.mockapi.io/notifications`;
  const req: AxiosResponse<HeaderStoreNotificationsEntity[]> = await axios(url);
  return req;
}

const getFavorites = async () => {
  const url = `https://61a47f74d5e83300172923f7.mockapi.io/favorites`;
  const req: AxiosResponse<HeaderStoreFavoritesEntity[]> = await axios(url);
  return req;
}

export const notificationsData = createEffect<typeof getNotifications, AxiosError>(getNotifications);

export const favoritesData = createEffect<typeof getFavorites, AxiosError>(getFavorites);

export const clickOnProfile = createEvent();

export const clickOnNotification = createEvent();

export const clickOnFavorites = createEvent();

export const addNotification = createEvent();
