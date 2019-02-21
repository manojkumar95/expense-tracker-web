import axios from 'axios';
import ApiError from './ApiError';
import ERRORS from './errorConstants';
import storage from './localStorage';
import BaseURL from '../utils/BaseUrl';

// eslint-disable-next-line no-unused-vars
const setupInterceptors = store => {
  // Default settings for axios request
  // TODO : Replace base URL with API from process.env
  axios.defaults.baseURL = BaseURL();
  axios.defaults.headers.post['Content-Type'] = 'application/json';
  axios.defaults.validateStatus = () => true;

  axios.interceptors.request.use(
    config => config
    , error => Promise.reject(error),
  );

  axios.interceptors.response.use(response => {
    // Process response body
    // use store.dispatch() to dispatch any redux ArticleActions
    if (response.status >= 500) {
      throw new ApiError(ERRORS.SERVER_ERROR);
    } else if (response.status === 401) {
      throw new ApiError(ERRORS.UNAUTHORISED_ERROR);
    } else if (response.status === 403) {
      throw new ApiError(ERRORS.FORBIDDEN_ERROR);
    } else if (response.status === 406) {
      throw new ApiError(ERRORS.LOGIN_ERROR);
    } else if (response.status === 200 || response.status === 201 || response.status === 202) {
      return response.data;
    } else if (response.status === 422) {
      throw new ApiError(response.data);
    } else if (response.status === 404) {
      throw new ApiError(response.data);
    } else if (response.status === 412) {
      throw new ApiError(response.data);
    } else {
      throw new ApiError(ERRORS.CLIENT_ERROR);
    }
  }, error => Promise.reject(error));
};

/**
 * Set auth token as default in axios
 * @param token
 */
export const setAuthToken = (token = storage.getItem('accessToken')) => {
  if (token) {
    axios.defaults.headers.common.Authorization = token;
  }
};

setAuthToken();

export default setupInterceptors;
