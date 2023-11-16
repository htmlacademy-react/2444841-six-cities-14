import { createReducer } from '@reduxjs/toolkit';
import { SixCities, Sorting } from '../const.ts';
import { TRTKState } from '../types/index.ts';
import { changeCity, changeSorting, fetchCards, fetchOffer, mainPageStatus, offerPageStatus } from './actions.ts';

const initialState: TRTKState = {
  city: SixCities.Paris,
  offer: null,
  cards: [],
  sorting: Sorting.Popular,
  loadingMainPage: false,
  loadingOfferPage: false,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(fetchCards, (state, action) => {
      state.cards = action.payload;
    })
    .addCase(fetchOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(mainPageStatus, (state, action) => {
      state.loadingMainPage = action.payload;
    })
    .addCase(offerPageStatus, (state, action) => {
      state.loadingOfferPage = action.payload;
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
