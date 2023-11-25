import { createSlice } from '@reduxjs/toolkit';
import { TOfferPageSlice } from '../../types/state';
import { fetchOffer } from '../api-actions';

const initialState: TOfferPageSlice = {
  offer: null,
  offerPageStatus: false,
};

export const offerPage = createSlice({
  name: 'offerPage',
  initialState,
  reducers: {
    unmountOffer: (state) => {
      state.offer = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffer.pending, (state) => {
        state.offerPageStatus = true;
      })
      .addCase(fetchOffer.rejected, (state) => {
        state.offerPageStatus = false;
      })
      .addCase(fetchOffer.fulfilled, (state, action) => {
        state.offerPageStatus = false;
        state.offer = action.payload;
      });
  }
});

export const { unmountOffer } = offerPage.actions;
