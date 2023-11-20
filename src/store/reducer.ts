import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, MAX_NEAR_PLACES, MAX_VISIBLE_REVIEWS, SixCities, Sorting } from '../const.ts';
import { TRTKState } from '../types/index.ts';
import { changeCity, changeSorting, mainPageStatus, offerPageStatus, unmountOffer } from './actions.ts';
import { loadOffer, loadNearPlaces, loadReviewList, loadCards, login, loginAction } from './api-actions.ts';

const initialState: TRTKState = {
  city: SixCities.Paris,
  offer: null,
  cards: [],
  sorting: Sorting.Popular,
  loadingMainPage: false,
  loadingOfferPage: false,
  nearPlaces: [],
  reviewList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(loginAction.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
    })
    .addCase(loginAction.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(changeCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(unmountOffer, (state) => {
      state.offer = null;
    })
    .addCase(loadCards.pending, (state) => {
      state.loadingMainPage = true;
    })
    .addCase(loadCards.fulfilled, (state, action) => {
      state.loadingMainPage = false;
      state.cards = action.payload;
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
    .addCase(loadReviewList.fulfilled, (state, action) => {
      state.reviewList = action.payload.sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date))).slice(0, MAX_VISIBLE_REVIEWS);
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
