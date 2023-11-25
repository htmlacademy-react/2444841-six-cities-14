import { createSlice } from '@reduxjs/toolkit';
import { MAX_VISIBLE_REVIEWS } from '../../const';
import { TReviewsSlice } from '../../types/state';
import { fetchReviewList, postComment } from '../api-actions';

const initialState: TReviewsSlice = {
  reviewList: [],
  reviewListStatus: false,
};

export const reviews = createSlice({
  name: 'reviews',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewList.pending, (state) => {
        state.reviewListStatus = true;
      })
      .addCase(fetchReviewList.rejected, (state) => {
        state.reviewListStatus = false;
      })
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        state.reviewListStatus = false;
        state.reviewList = action.payload.sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date))).slice(0, MAX_VISIBLE_REVIEWS);
      })
      .addCase(postComment.pending, (state) => {
        state.reviewListStatus = true;
      })
      .addCase(postComment.rejected, (state) => {
        state.reviewListStatus = false;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.reviewListStatus = false;
        state.reviewList = [...state.reviewList, action.payload].sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date))).slice(0, MAX_VISIBLE_REVIEWS);
      });
  }
});
