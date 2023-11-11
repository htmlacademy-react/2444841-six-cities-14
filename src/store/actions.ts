import { createAction } from '@reduxjs/toolkit';
import { SixCities } from '../const';
import { TOffer } from '../types';

export const changeCity = createAction('city/changeCity', (value: SixCities) => ({
  payload: value,
}));

export const renderOffers = createAction('offers/renderOffers', (value: TOffer[]) => ({
  payload: value,
}));
