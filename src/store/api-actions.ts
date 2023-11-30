import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCard, TOffer, TReview, TUserAuth, TLogin, TUser, TCommentData } from '../types';
import { dropToken, saveToken } from '../services/token';

export const fetchCards = createAsyncThunk<TCard[], undefined, {extra: AxiosInstance}>
(
  'offers/fetchCards',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCard[]>('/six-cities/offers');
    return data;
  },
);

export const fetchOffer = createAsyncThunk<TOffer, string, {extra: AxiosInstance}>
(
  'offers/fetchOffer',
  async (id, { extra: api }) => {
    const {data} = await api.get<TOffer>(`/six-cities/offers/${id}`);
    return data;
  },
);

export const fetchNearPlaces = createAsyncThunk<TCard[], string, {extra: AxiosInstance}>
(
  'offers/fetchNearPlaces',
  async (id, {extra: api}) => {
    const {data} = await api.get<TCard[]>(`/six-cities/offers/${id}/nearby`);
    return data;
  },
);

export const fetchReviewList = createAsyncThunk<TReview[], string, {extra: AxiosInstance}>
(
  'offers/fetchReviewList',
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

export const loginAction = createAsyncThunk<TUser, TLogin, {extra: AxiosInstance}>
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

export const postComment = createAsyncThunk<TReview, TCommentData, {extra: AxiosInstance}>
(
  'auth/postComment',
  async ({id, comment, rating}, {extra: api}) => {
    const {data} = await api.post<TReview>(`/six-cities/comments/${id}`, {comment, rating});
    return data;
  },
);

export const fetchFavorites = createAsyncThunk<TCard[], undefined, {extra: AxiosInstance}>
(
  'offers/fetchFavorites',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<TCard[]>('/six-cities/favorite');
    return data;
  },
);
