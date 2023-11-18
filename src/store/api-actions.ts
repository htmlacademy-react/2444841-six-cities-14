import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, TCard, TOffer } from '../types';
import { fetchCards, mainPageStatus } from './actions';

export const loadCards = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadCards',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(mainPageStatus(true));
    const {data} = await api.get<TCard[]>('/six-cities/offers');
    dispatch(fetchCards(data));
    dispatch(mainPageStatus(false));
  },
);

export const loadOffer = createAsyncThunk<TOffer, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
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
