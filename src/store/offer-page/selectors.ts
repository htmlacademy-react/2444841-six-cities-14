import { createSelector } from '@reduxjs/toolkit';
import { TOfferPageSlice, TState } from '../../types/state';

export const getOffer = createSelector(
  (state: TState) => state['offerPage'],
  (state: TOfferPageSlice) => state.offer
);

export const getLoadingOfferPage = createSelector(
  (state: TState) => state['offerPage'],
  (state: TOfferPageSlice) => state.offerPageStatus
);
