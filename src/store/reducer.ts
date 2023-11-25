import { createReducer } from '@reduxjs/toolkit';
import { AuthorizationStatus, MAX_VISIBLE_REVIEWS, SixCities, Sorting } from '../const.ts';
import { TRTKState } from '../types/index.ts';
import { changeCity, changeSorting, getMainPageStatus, getOfferPageStatus, unmountOffer } from './actions.ts';
import { fetchOffer, fetchNearPlaces, fetchReviewList, fetchCards, login, loginAction, logout, postComment } from './api-actions.ts';

const initialState: TRTKState = {
  city: SixCities.Paris,
  offer: null,
  cards: [],
  sorting: Sorting.Popular,
  mainPageStatus: false,
  offerPageStatus: false,
  reviewListStatus: false,
  nearPlaces: [],
  reviewList: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  userData: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userData = action.payload;
    })
    .addCase(login.rejected, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
    })
    .addCase(logout.fulfilled, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.userData = null;
    })
    .addCase(loginAction.fulfilled, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.userData = action.payload;
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
    .addCase(fetchCards.pending, (state) => {
      state.mainPageStatus = true;
    })
    .addCase(fetchCards.fulfilled, (state, action) => {
      state.mainPageStatus = false;
      state.cards = action.payload;
    })
    .addCase(fetchOffer.pending, (state) => {
      state.offerPageStatus = true;
    })
    .addCase(fetchOffer.fulfilled, (state, action) => {
      state.offerPageStatus = false;
      state.offer = action.payload;
    })
    .addCase(getMainPageStatus, (state, action) => {
      state.mainPageStatus = action.payload;
    })
    .addCase(getOfferPageStatus, (state, action) => {
      state.offerPageStatus = action.payload;
    })
    .addCase(fetchNearPlaces.fulfilled, (state, action) => {
      state.nearPlaces = action.payload;
    })
    .addCase(fetchReviewList.pending, (state) => {
      state.reviewListStatus = true;
    })
    .addCase(fetchReviewList.fulfilled, (state, action) => {
      state.reviewListStatus = false;
      state.reviewList = action.payload.sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date))).slice(0, MAX_VISIBLE_REVIEWS);
    })
    .addCase(postComment.pending, (state) => {
      state.reviewListStatus = true;
    })
    .addCase(postComment.fulfilled, (state, action) => {
      state.reviewListStatus = false;
      state.reviewList = [...state.reviewList, action.payload].sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date))).slice(0, MAX_VISIBLE_REVIEWS);
    })
    .addCase(changeSorting, (state, action) => {
      state.sorting = action.payload;
    });
});
