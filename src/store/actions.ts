import { createAction } from '@reduxjs/toolkit';
import { SixCities, Sorting } from '../const';
import { TOffer } from '../types';

export const changeCity = createAction('city/changeCity', (value: SixCities) => ({
  payload: value,
}));

export const renderOffers = createAction('offers/renderOffers', (value: TOffer[]) => ({
  payload: value,
}));

export const changeSorting = createAction('offers/changeSorting', (value: Sorting) => ({
  payload: value,
}));
