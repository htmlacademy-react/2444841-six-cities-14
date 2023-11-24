import { TError, TValidationErrorDetail } from '../types/error-types';
import { AxiosError } from 'axios';

export function errorMessageRender(error: AxiosError<TError>): string {
  let message: string = '';
  if (error.response && error.response.data !== undefined) {
    const partOne = error.response?.data.message;
    if (error.response?.status === 400) {
      const validationDetails: TValidationErrorDetail[] = [];
      error.response.data.details?.forEach((item) => validationDetails.push(item));
      const errorMessages: string[][] = [];
      validationDetails.forEach((item) => errorMessages.push(item.messages));
      const partTwo: string = errorMessages.join(', ');
      message = `${partOne}: ${partTwo}`;
    } else {
      message = partOne;
    }
  }
  return message;
}
