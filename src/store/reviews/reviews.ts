import { createSlice } from '@reduxjs/toolkit';
import { TReviewsSlice } from '../../types/state';
import { fetchReviewList, postComment } from '../api-actions';

const initialState: TReviewsSlice = {
  reviewList: [],
  reviewListStatus: false,
  reviewListError: false,
  reviewPostError: false,
  reviewPostStatus: false,
};

export const reviews = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    unmountReviews: (state) => {
      state.reviewList = [];
    },
    undoError: (state) => {
      state.reviewPostError = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchReviewList.pending, (state) => {
        state.reviewListStatus = true;
      })
      .addCase(fetchReviewList.rejected, (state) => {
        state.reviewListStatus = false;
        state.reviewListError = true;
      })
      .addCase(fetchReviewList.fulfilled, (state, action) => {
        state.reviewListStatus = false;
        state.reviewList = action.payload.sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date)));
      })
      .addCase(postComment.pending, (state) => {
        state.reviewPostStatus = true;
      })
      .addCase(postComment.rejected, (state) => {
        state.reviewPostError = true;
        state.reviewPostStatus = false;
      })
      .addCase(postComment.fulfilled, (state, action) => {
        state.reviewPostStatus = false;
        state.reviewList = [...state.reviewList, action.payload].sort((newer, older) => Number(new Date(older.date)) - Number(new Date(newer.date)));
        state.reviewPostError = false;
      });
  }
});

export const { unmountReviews, undoError } = reviews.actions;
