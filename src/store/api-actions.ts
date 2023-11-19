import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCard, TOffer, TReview, TUserAuth, TAppDispatch } from '../types';

export const loadCards = createAsyncThunk<TCard[], undefined, {extra: AxiosInstance}>
(
  'offers/loadCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCard[]>('/six-cities/offers');
    return data;
  },
);

export const loadOffer = createAsyncThunk<TOffer, string, {extra: AxiosInstance}>
(
  'offers/loadOffer',
  async (id, { extra: api }) => {
    const {data} = await api.get<TOffer>(`/six-cities/offers/${id}`);
    return data;
  },
);

export const loadNearPlaces = createAsyncThunk<TCard[], string, {extra: AxiosInstance}>
(
  'offers/loadNearPlaces',
  async (id, {extra: api}) => {
    const {data} = await api.get<TCard[]>(`/six-cities/offers/${id}/nearby`);
    return data;
  },
);

export const loadReviewList = createAsyncThunk<TReview[], string, {extra: AxiosInstance}>
(
  'offers/loadReviewList',
  async (id, {extra: api}) => {
    const {data} = await api.get<TReview[]>(`/six-cities/comments/${id}`);
    return data;
  },
);

export const login = createAsyncThunk<TUserAuth, undefined, {
  dispatch: TAppDispatch;
  extra: AxiosInstance;
}>
(
  'auth/login',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserAuth>('/six-cities/login');
    return data;
  },
);
