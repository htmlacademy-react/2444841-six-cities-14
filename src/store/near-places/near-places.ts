import { createSlice } from '@reduxjs/toolkit';
import { MAX_NEAR_PLACES } from '../../const';
import { TNearPlacesSlice } from '../../types/state';
import { fetchNearPlaces } from '../api-actions';

const initialState: TNearPlacesSlice = {
  nearPlacesStatus: false,
  nearPlaces: [],
  nearPlacesError: false,
};

export const nearPlaces = createSlice({
  name: 'nearPlaces',
  initialState,
  reducers: {
    unmountNearPlaces: (state) => {
      state.nearPlaces = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.pending, (state) => {
        state.nearPlacesStatus = true;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.nearPlacesStatus = false;
        state.nearPlacesError = true;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlacesStatus = false;
        state.nearPlaces = action.payload.slice(0, MAX_NEAR_PLACES);
      });
  }
});

export const { unmountNearPlaces } = nearPlaces.actions;
