import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { TAppDispatch, TState, TOfferCard } from '../types';
import { fetchOffers } from './actions';

export const loadOffersCard = createAsyncThunk<void, undefined, {
  dispatch: TAppDispatch;
  state: TState;
  extra: AxiosInstance;
}>(
  'offers/loadOffersCard',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<TOfferCard[]>('/six-cities/offers');
    dispatch(fetchOffers(data));
  },
);
