import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, TCard, TOffer } from '../types';
import { fetchCards, fetchOffer } from './actions';

export const loadCards = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadCards',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TCard[]>('/six-cities/offers');
    dispatch(fetchCards(data));
  },
);

export const loadOffer = createAsyncThunk<void, string, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadOffer',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<TOffer>(`/six-cities/offers/${id}`);
    dispatch(fetchOffer(data));
  },
);
