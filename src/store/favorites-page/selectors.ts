import { createSelector } from '@reduxjs/toolkit';
import { TFavoritesPageSlice, TState } from '../../types/state';

export const getFavoritesPage = createSelector(
  (state: TState) => state['favoritesPage'],
  (state: TFavoritesPageSlice) => state.favoritesPage
);

export const getLoadingFavoritesPage = createSelector(
  (state: TState) => state['favoritesPage'],
  (state: TFavoritesPageSlice) => state.favoritesPageStatus
);

export const getFavoritesPageError = createSelector(
  (state: TState) => state['favoritesPage'],
  (state: TFavoritesPageSlice) => state.favoritesPageError
);

export const getFetchingFavoriteStatus = createSelector(
  (state: TState) => state['favoritesPage'],
  (state: TFavoritesPageSlice) => state.addFavoriteStatus
);

export const getFetchingFavoriteError = createSelector(
  (state: TState) => state['favoritesPage'],
  (state: TFavoritesPageSlice) => state.addFavoriteError
);
