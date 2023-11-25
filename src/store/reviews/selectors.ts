import { TReview } from '../../types';
import { TState } from '../../types/state';


export const getReviews = (state: Pick<TState, 'reviews'>): TReview[] => state['reviews'].reviewList;
export const getLoadingReviews = (state: Pick<TState, 'reviews'>): boolean => state['reviews'].reviewListStatus;
