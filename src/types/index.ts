import { AppRoute, AuthorizationStatus } from '../const';

export type TFlatInfo = {
  id: number;
  title: string;
  price: number;
  previewImage: string;
  desc: string;
};

export type TCardLocation = 'cities' | 'favorites' | 'near-places';

export type TCardList = {
  offers: TFlatInfo[];
  page: TCardLocation;
};

export type TCardInfo = {
  offer: TFlatInfo;
  page: TCardLocation;
};

export type TCities = string[]

export type TAppProps = {
  offers: TFlatInfo[];
  cities: TCities;
};

export type TOffer = {
  city: TCity;
  previewImage: string;
  images: string[];
  title: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  good: string[];
  host: THost;
  description: string;
  location: TLocation;
  id: string;
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
