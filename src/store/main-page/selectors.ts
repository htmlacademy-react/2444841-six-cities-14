import { createSelector } from '@reduxjs/toolkit';
import { TMainPageSlice, TState } from '../../types/state';

export const getCity = createSelector(
  (state: TState) => state['mainPage'],
  (state: TMainPageSlice) => state.city
);

export const getSorting = createSelector(
  (state: TState) => state['mainPage'],
  (state: TMainPageSlice) => state.sorting
);

export const getCards = createSelector(
  (state: TState) => state['mainPage'],
  (state: TMainPageSlice) => state.cards
);

export const getLoadingStatus = createSelector(
  (state: TState) => state['mainPage'],
  (state: TMainPageSlice) => state.mainPageStatus
);
