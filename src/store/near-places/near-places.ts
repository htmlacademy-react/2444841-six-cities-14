import { createSlice } from '@reduxjs/toolkit';
import { TNearPlacesSlice } from '../../types/state';
import { fetchNearPlaces } from '../api-actions';

const initialState: TNearPlacesSlice = {
  nearPlacesStatus: false,
  nearPlaces: [],
};

export const nearPlaces = createSlice({
  name: 'nearPlaces',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchNearPlaces.pending, (state) => {
        state.nearPlacesStatus = true;
      })
      .addCase(fetchNearPlaces.rejected, (state) => {
        state.nearPlacesStatus = false;
      })
      .addCase(fetchNearPlaces.fulfilled, (state, action) => {
        state.nearPlacesStatus = false;
        state.nearPlaces = action.payload;
      });
  }
});
