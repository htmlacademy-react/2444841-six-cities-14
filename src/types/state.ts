import { store } from '../store/index.js';
import { AuthorizationStatus, SixCities, Sorting } from '../const.js';
import { TCard, TOffer, TReview, TUser } from './index.js';

export type TMainPageSlice = {
  city: SixCities;
  sorting: Sorting;
  cards: TCard[];
  mainPageStatus: boolean;
}
export type TNearPlacesSlice = {
  nearPlacesStatus: boolean;
  nearPlaces: TCard[];
  nearPlacesError: boolean;
}

export type TOfferPageSlice = {
  offer: TOffer | null;
  offerPageStatus: boolean;
}

export type TReviewsSlice = {
  reviewList: TReview[];
  reviewListStatus: boolean;
  reviewListError: boolean;
}

export type TLoginSlice = {
  authorizationStatus: AuthorizationStatus;
  userData: TUser | null;
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
