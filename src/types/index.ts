import { AppRoute, AuthorizationStatus } from '../const.ts';

export type TFlatInfo = {
  id: string;
  title: string;
  price: number;
  previewImage: string;
  description: string;
};

export type TCardLocation = 'cities' | 'favorites' | 'near-places';

export type TCardList = {
  offers: TOffer[];
  page: TCardLocation;
  onCardHover?: (id: string | null) => void;
};

export type TCardInfo = {
  offer: TOffer;
  page: TCardLocation;
  onCardHover?: (id: string | null) => void;
};

export type TCities = {
  cities: string[];
};

export type TAppProps = {
  offers: TOffer[];
  reviews: TReviews[];
};

export type TOffer = TFlatInfo & {
  city: TCity;
  images: string[];
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  good: string[];
  host: THost;
  location: TLocation;
};

export type TImages = {
  images: string[];
}

type TCity = {
  name: string;
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
  good: string[];
}

export type TRating = {
  id: number;
  title: string;
};

export type TReviews = {
  id: string;
  user: THost;
  rating: number;
  comment: string;
  date: string;
}

export type TReviewComponent ={
  reviews: TReviews[];
  id: string;
}

export type TOfferPageProps = {
  status: AuthorizationStatus;
  offers: TOffer[];
  reviews: TReviews[];
}

export type TNearPlaces = {
  offers: TOffer[];
}
