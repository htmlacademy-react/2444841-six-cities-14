import { createSlice } from '@reduxjs/toolkit';
import { TFavoritesPageSlice } from '../../types/state';
import { addFavorite, fetchFavorites } from '../api-actions';

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
      })
      .addCase(addFavorite.pending, (state) => {
        state.favoritesPageStatus = true;
      })
      .addCase(addFavorite.rejected, (state) => {
        state.favoritesPageStatus = false;
        state.favoritesPageError = true;
      })
      .addCase(addFavorite.fulfilled, (state, action) => {
        state.favoritesPageStatus = false;

        if (action.payload.isFavorite) {
          state.favoritesPage = [...state.favoritesPage, action.payload];
        } else {
          state.favoritesPage = state.favoritesPage.filter((card) => card.id !== action.payload.id);
        }
      });
  }
});

export const { unmountFavoritesPage } = favoritesPage.actions;
