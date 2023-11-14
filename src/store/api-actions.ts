import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, TCard } from '../types';
import { fetchCards } from './actions';

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
