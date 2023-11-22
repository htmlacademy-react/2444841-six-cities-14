import { createAction } from '@reduxjs/toolkit';
import { SixCities, Sorting } from '../const';

export const changeCity = createAction('city/changeCity', (value: SixCities) => ({
  payload: value,
}));

export const changeSorting = createAction('offers/changeSorting', (value: Sorting) => ({
  payload: value,
}));

export const unmountOffer = createAction('offers/unmountOffer');

export const mainPageStatus = createAction('loadingStatus/mainPageStatus', (value: boolean) => ({
  payload: value,
}));

export const offerPageStatus = createAction('loadingStatus/offerPageStatus', (value: boolean) => ({
  payload: value,
}));
