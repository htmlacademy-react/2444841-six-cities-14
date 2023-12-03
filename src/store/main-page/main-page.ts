import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCards } from '../api-actions';
import { TMainPageSlice } from '../../types/state';
import { SixCities, Sorting } from '../../const';
import { TFavoriteData } from '../../types';

const initialState: TMainPageSlice = {
  city: SixCities.Paris,
  sorting: Sorting.Popular,
  cards: [],
  mainPageStatus: false,
};

export const mainPage = createSlice({
  name: 'mainPage',
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<SixCities>) => {
      state.city = action.payload;
    },
    changeSorting: (state, action: PayloadAction<Sorting>) => {
      state.sorting = action.payload;
    },
    refreshCards: (state, action: PayloadAction<TFavoriteData>) => {
      state.cards.map((card) => {
        if (card.id === action.payload.id) {
          card.isFavorite = action.payload.isFavorite;
        }
      });
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchCards.pending, (state) => {
        state.mainPageStatus = true;
      })
      .addCase(fetchCards.rejected, (state) => {
        state.mainPageStatus = false;
      })
      .addCase(fetchCards.fulfilled, (state, action) => {
        state.mainPageStatus = false;
        state.cards = action.payload;
      });
  }
});

export const { changeCity, changeSorting, refreshCards } = mainPage.actions;
