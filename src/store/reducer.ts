import { createReducer } from '@reduxjs/toolkit';
import { SixCities } from '../const.ts';
import { TRTKState } from '../types/index.ts';
import { changeCity, renderOffers } from './actions.ts';

const initialState: TRTKState = {
  city: SixCities.Paris,
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(renderOffers, (state, action) => {
      state.offers = action.payload;
    });
});
