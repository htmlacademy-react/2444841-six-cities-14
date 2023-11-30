import { createSlice } from '@reduxjs/toolkit';
import { TFavoritesPageSlice } from '../../types/state';
import { fetchFavorites } from '../api-actions';

const initialState: TFavoritesPageSlice = {
  favoritesPageStatus: false,
  favoritesPage: [],
  favoritesPageError: false,
};

export const favoritesPage = createSlice({
  name: 'favoritesPage',
  initialState,
  reducers: {
    unmountFavoritesPage: (state) => {
      state.favoritesPage = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchFavorites.pending, (state) => {
        state.favoritesPageStatus = true;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.favoritesPageStatus = false;
        state.favoritesPageError = true;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favoritesPageStatus = false;
        state.favoritesPage = action.payload;
      });
  }
});

export const { unmountFavoritesPage } = favoritesPage.actions;
