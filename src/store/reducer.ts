import { createReducer } from '@reduxjs/toolkit';
import { SixCities, Sorting } from '../const.ts';
import { TRTKState } from '../types/index.ts';
import { changeCity, renderOffers, changeSorting } from './actions.ts';

const initialState: TRTKState = {
  city: SixCities.Paris,
  offers: [],
  sorting: Sorting.Popular
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(renderOffers, (state, action) => {
      state.offers = action.payload;
    }).addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
