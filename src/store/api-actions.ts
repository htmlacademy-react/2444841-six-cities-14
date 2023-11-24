import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCard, TOffer, TReview, TUserAuth, TAppDispatch, TLogin, TUser, TCommentData } from '../types';
import { dropToken, saveToken } from '../services/token';

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

export const login = createAsyncThunk<TUserAuth, undefined, {extra: AxiosInstance}>
(
  'auth/login',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TUserAuth>('/six-cities/login');
    return data;
  },
);

export const loginAction = createAsyncThunk<TUser, TLogin, {
  dispatch: TAppDispatch;
  extra: AxiosInstance;
}>
(
  'auth/loginAction',
  async ({email, password}, {extra: api}) => {
    const {data} = await api.post<TUserAuth>('/six-cities/login', {email, password});
    saveToken(data.token);
    return {
      name: data.name,
      avatarUrl: data.avatarUrl,
      isPro: data.isPro,
    };
  },
);

export const logout = createAsyncThunk<void, undefined, {extra: AxiosInstance}>
(
  'auth/logout',
  async (_arg, {extra: api}) => {
    await api.delete('/six-cities/logout');
    dropToken();
  },
);

export const postComment = createAsyncThunk<TReview, TCommentData, {
  dispatch: TAppDispatch;
  extra: AxiosInstance;
}>
(
  'auth/postComment',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TReview>(`/six-cities/comments/${id}`, {comment, rating});
    return data;
  },
);
