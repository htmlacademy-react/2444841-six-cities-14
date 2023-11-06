import { AppRoute, AuthorizationStatus } from '../const.ts';

export type TCardLocation = 'cities' | 'favorites' | 'near-places';

export type TCardList = {
  offers: TOffer[];
  page: TCardLocation;
  onCardHover?: (id: TPoint | null) => void;
};

export type TCardInfo = {
  offer: TOffer;
  page: TCardLocation;
  onCardHover?: (id: TPoint | null) => void;
};

export type TCities = {
  cities: string[];
};

export type TAppProps = {
  offers: TOffer[];
  reviews: TReview[];
};

export type TMainPageProps = {
  offers: TOffer[];
};

export type TOffer = {
  id: string;
  title: string;
  price: number;
  previewImage: string;
  description: string;
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

export type TCity = {
  id?: string;
  name?: string;
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

export type TReview = {
  id: string;
  user: THost;
  rating: number;
  comment: string;
  date: string;
}

export type TReviewList = {
  reviews: TReview[];
  status: AuthorizationStatus;
}

export type TReviewComponent = {
  review: TReview;
}

export type TOfferPageProps = {
  status: AuthorizationStatus;
  offers: TOffer[];
  reviews: TReview[];
}

export type TNearPlaces = {
  offers: TOffer[];
}

export type TMapProps = {
  city: TCity;
  points: TPoint[];
  activePoint: TCity | null;
}

export type TPoint = {
  id: string;
  location: TLocation;
}
