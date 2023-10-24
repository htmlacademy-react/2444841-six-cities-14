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
