import { SixCities, Sorting } from '../../const';
import { TCard } from '../../types';
import { TState } from '../../types/state';

export const getCity = (state: Pick<TState, 'mainPage'>): SixCities => state['mainPage'].city;
export const getSorting = (state: Pick<TState, 'mainPage'>): Sorting => state['mainPage'].sorting;
export const getCards = (state: Pick<TState, 'mainPage'>): TCard[] => state['mainPage'].cards;
export const getLoadingStatus = (state: Pick<TState, 'mainPage'>): boolean => state['mainPage'].mainPageStatus;
