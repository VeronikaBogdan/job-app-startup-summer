import axios from 'axios';

import { CLIENT_ID, CLIENT_SECRET, HOST, HR, LOGIN, PASSWORD, X_SECRET_KEY } from './../../../app-constants';

export const instance = axios.create({
  baseURL: HOST,
});

instance.interceptors.response.use(
  (res) => {
    const { access_token } = res.data;
    localStorage.setItem('access_token', access_token);
    return res;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const config = {
  headers: {
    'x-secret-key': X_SECRET_KEY,
    'X-Api-App-Id': CLIENT_SECRET,
  },
  params: {
    login: LOGIN,
    password: PASSWORD,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
    hr: HR,
  },
};

export const requestGetAuth = () => instance.get(`${HOST}/oauth2/password/`, config);
