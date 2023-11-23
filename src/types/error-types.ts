export type TUserAuthError401 = {
  errorType: 'COMMON_ERROR';
  message: 'Access deny.' | 'Header Token is not correct.';
}

export type TOfferFetchError404 = {
  errorType: 'COMMON_ERROR';
  message: string;
}

export type TValidationError400 = {
  errorType: 'VALIDATION_ERROR';
  message: string;
  details: TValidatinErrorDetail[];
}

export type TValidatinErrorDetail = {
  property: string;
  value: string;
  messages: string[];
}

export type TError = TValidationError400 | TOfferFetchError404 | TUserAuthError401;
