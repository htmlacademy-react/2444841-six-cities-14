import { createReducer } from '@reduxjs/toolkit';
import { MAX_NEAR_PLACES, SixCities, Sorting } from '../const.ts';
import { TRTKState } from '../types/index.ts';
import { changeCity, changeSorting, fetchCards, fetchOffer, mainPageStatus, offerPageStatus } from './actions.ts';
import { loadOffer, loadNearPlaces } from './api-actions.ts';

const initialState: TRTKState = {
  city: SixCities.Paris,
  offer: null,
  cards: [],
  sorting: Sorting.Popular,
  loadingMainPage: false,
  loadingOfferPage: false,
  nearPlaces: [],
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
    .addCase(loadOffer.pending, (state) => {
      state.loadingOfferPage = true;
    })
    .addCase(loadOffer.fulfilled, (state, action) => {
      state.loadingOfferPage = false;
      state.offer = action.payload;
    })
    .addCase(mainPageStatus, (state, action) => {
      state.loadingMainPage = action.payload;
    })
    .addCase(offerPageStatus, (state, action) => {
      state.loadingOfferPage = action.payload;
    })
    .addCase(loadNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload.slice(0, MAX_NEAR_PLACES);
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
