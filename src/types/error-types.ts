export type TError = {
  errorType: 'VALIDATION_ERROR';
  message: string;
  details?: TValidationErrorDetail[];
}

export type TValidationErrorDetail = {
  property: string;
  value: string;
  messages: string[];
}
