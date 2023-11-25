import { createAction } from '@reduxjs/toolkit';
import { SixCities, Sorting } from '../const';

export const changeCity = createAction('city/changeCity', (value: SixCities) => ({
  payload: value,
}));

export const changeSorting = createAction('offers/changeSorting', (value: Sorting) => ({
  payload: value,
}));

export const unmountOffer = createAction('offers/unmountOffer');

export const getMainPageStatus = createAction('loadingStatus/getMainPageStatus', (value: boolean) => ({
  payload: value,
}));

export const getOfferPageStatus = createAction('loadingStatus/getOfferPageStatus', (value: boolean) => ({
  payload: value,
}));

export const getReviewListStatus = createAction('loadingStatus/getReviewListStatus');
