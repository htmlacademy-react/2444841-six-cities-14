import { AuthorizationStatus } from '../../const';
import { TUser } from '../../types';
import { TState } from '../../types/state';

export const getAuthStatus = (state: Pick<TState, 'user'>): AuthorizationStatus => state['user'].authorizationStatus;
export const getUserData = (state: Pick<TState, 'user'>): TUser | null => state['user'].userData;
