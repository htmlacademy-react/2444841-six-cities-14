import { AppRoute, AuthorizationStatus, SixCities, Sorting } from '../const.ts';
import { store } from '../store/index.ts';

export type TCardLocation = 'cities' | 'favorites' | 'near-places';

export type TCardList = {
  offers: TCard[];
  page: TCardLocation;
  onCardHover?: (id: TPoint | null) => void;
};

export type TCardInfo = {
  offer: TCard;
  page: TCardLocation;
  onCardHover?: (id: TPoint | null) => void;
};

export type TOffer = TCard & {
  description: string;
  images: string[];
  bedrooms: number;
  maxAdults: number;
  goods: string[];
  host: THost;
};

export type TImages = {
  images: string[];
}

export type TCity = {
  name: SixCities;
  location: TLocation;
};

type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
};

export type THost = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
};

export type THostProps = {
  host: THost;
  description: string;
}

export type TProtectedRoute = {
  status: AuthorizationStatus;
  redirectPage: AppRoute;
  children: JSX.Element;
}

export type TOfferInfoProps = {
  isPremium: boolean;
  title: string;
  isFavorite: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
}

export type TRating = {
  id: number;
  title: string;
};

export type TUser = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
}

export type TReview = {
  id: string;
  user: TUser;
  rating: number;
  comment: string;
  date: string;
}

export type TReviewList = {
  status: AuthorizationStatus;
}

export type TReviewComponent = {
  review: TReview;
}

export type TOfferPageProps = {
  status: AuthorizationStatus;
}

export type TMapProps = {
  city: TCity;
  points: TPoint[];
  activePoint: TPoint | null;
  page: 'cities' | 'offer';
}

export type TPoint = {
  id: string;
  location: TLocation;
}

export type TRTKState = {
  city: SixCities;
  offer: TOffer | null;
  cards: TCard[];
  sorting: Sorting;
  loadingMainPage: boolean;
  loadingOfferPage: boolean;
  nearPlaces: TCard[];
  reviewList: TReview[];
}

export type TState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;


export type TCard = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}
