import { combineReducers } from '@reduxjs/toolkit';
import { nearPlaces } from './near-places/near-places';
import { reviews } from './reviews/reviews';
import { user } from './user/user';
import { mainPage } from './main-page/main-page';
import { offerPage } from './offer-page/offer-page';
import { favoritesPage } from './favorites-page/favorites-page';

export const rootReducer = combineReducers({
  'nearPlaces': nearPlaces.reducer,
  'reviews': reviews.reducer,
  'user': user.reducer,
  'mainPage': mainPage.reducer,
  'offerPage': offerPage.reducer,
  'favoritesPage': favoritesPage.reducer,
});
