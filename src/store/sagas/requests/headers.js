import { CLIENT_SECRET, X_SECRET_KEY } from '../../../app-constants';

export const getHeaders = (token) => {
  return {
    Authorization: `Bearer ${token}`,
    'x-secret-key': X_SECRET_KEY,
    'X-Api-App-Id': CLIENT_SECRET,
  };
};
