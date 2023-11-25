import { TCard } from '../../types';
import { TState } from '../../types/state';

export const getNearPlaces = (state: Pick<TState, 'nearPlaces'>): TCard[] => state['nearPlaces'].nearPlaces;
export const getLoadingNearPlaces = (state: Pick<TState, 'nearPlaces'>): boolean => state['nearPlaces'].nearPlacesStatus;
