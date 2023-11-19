import axios, { AxiosInstance, AxiosError } from 'axios';
import { TUserAuthError } from '../types/error-types';

const BACKEND_URL = 'https://14.design.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<TUserAuthError>) => {
      if (error.response) {
        throw error;
      }
    }
  );

  return api;
};
