import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios';
import { getToken } from './token';
import { TError } from '../types/error-types';
import { toast } from 'react-toastify';
import { errorMessageRender } from '../utils/error-message-render';

const BACKEND_URL = 'https://14.design.pages.academy';
const REQUEST_TIMEOUT = 5000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getToken();
      if (token && config.headers) {
        config.headers['x-token'] = token;
      }
      return config;
    },
  );

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<TError>) => {
      if (error.response && error.response.status === 400) {
        toast.warn(errorMessageRender(error));
      }
      throw error;
    }
  );

  return api;
};
