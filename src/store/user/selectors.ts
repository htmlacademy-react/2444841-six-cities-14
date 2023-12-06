import { createSelector } from '@reduxjs/toolkit';
import { TLoginSlice, TState } from '../../types/state';

export const getAuthStatus = createSelector(
  (state: TState) => state['user'],
  (state: TLoginSlice) => state.authorizationStatus
);

export const getUserData = createSelector(
  (state: TState) => state['user'],
  (state: TLoginSlice) => state.userData
);

export const getUserPostError = createSelector(
  (state: TState) => state['user'],
  (state: TLoginSlice) => state.postError
);

export const getUserDataLoadingStatus = createSelector(
  (state: TState) => state['user'],
  (state: TLoginSlice) => state.userDataLoadingStatus
);
