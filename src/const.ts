export enum AppRoute {
  Root = '/',
  Favorites = '/favorites',
  Login = '/login',
  NotFoundPage = '*',
  Offer = '/offer/:id',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ConstantValues = {
  MinCommentLength: 50,
  MaxCommentLength: 300,
} as const;

export enum SixCities {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amstardam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf',
}

export const PIN_MARKER_DEFAULT = 'img/pin.svg';

export const PIN_MARKER_CURRENT = 'img/pin-active.svg';
