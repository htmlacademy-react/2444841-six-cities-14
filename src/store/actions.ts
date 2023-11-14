import { createAction } from '@reduxjs/toolkit';
import { SixCities, Sorting } from '../const';
import { TCard } from '../types';

export const changeCity = createAction('city/changeCity', (value: SixCities) => ({
  payload: value,
}));

export const changeSorting = createAction('offers/changeSorting', (value: Sorting) => ({
  payload: value,
}));

export const fetchCards = createAction('offers/fetchCards', (value: TCard[]) => ({
  payload: value,
}));
