import { createSelector } from '@reduxjs/toolkit';
import { TReviewsSlice, TState } from '../../types/state';

export const getReviews = createSelector(
  (state: TState) => state['reviews'],
  (state: TReviewsSlice) => state.reviewList
);

export const getLoadingReviews = createSelector(
  (state: TState) => state['reviews'],
  (state: TReviewsSlice) => state.reviewListStatus
);

export const getReviewsError = createSelector(
  (state: TState) => state['reviews'],
  (state: TReviewsSlice) => state.reviewListError
);

export const getLoadingReviewForm = createSelector(
  (state: TState) => state['reviews'],
  (state: TReviewsSlice) => state.reviewPostStatus
);

export const getReviewFormError = createSelector(
  (state: TState) => state['reviews'],
  (state: TReviewsSlice) => state.reviewPostError
);
