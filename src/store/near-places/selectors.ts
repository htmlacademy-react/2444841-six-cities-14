import { createSelector } from '@reduxjs/toolkit';
import { TNearPlacesSlice, TState } from '../../types/state';

export const getNearPlaces = createSelector(
  (state: TState) => state['nearPlaces'],
  (state: TNearPlacesSlice) => state.nearPlaces
);

export const getLoadingNearPlaces = createSelector(
  (state: TState) => state['nearPlaces'],
  (state: TNearPlacesSlice) => state.nearPlacesStatus
);

export const getNearPlacesError = createSelector(
  (state: TState) => state['nearPlaces'],
  (state: TNearPlacesSlice) => state.nearPlacesError
);
