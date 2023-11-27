import { TOffer } from '../../types';
import { TState } from '../../types/state';

export const getOffer = (state: Pick<TState, 'offerPage'>): TOffer | null => state['offerPage'].offer;
export const getLoadingOfferPage = (state: Pick<TState, 'offerPage'>): boolean => state['offerPage'].offerPageStatus;
