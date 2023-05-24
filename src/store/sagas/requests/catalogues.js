import axios from 'axios';

import { HOST } from '../../../app-constants';
import { getHeaders } from '../requests/headers';

export const requestGetCatalogues = (token) => {
  const headers = getHeaders(token);

  return axios.get(`${HOST}/catalogues/`, {
    headers: headers,
  });
};
