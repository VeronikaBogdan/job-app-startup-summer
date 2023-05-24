import axios from 'axios';

import { HOST } from '../../../app-constants';
import { getHeaders } from '../requests/headers';

export const requestGetVacancies = (searchData) => {
  const headers = getHeaders(searchData?.token);

  return axios.get(`${HOST}/vacancies/`, {
    headers: headers,
    params: {
      published: 1,
      no_agreement: 1,
      count: 4,
      ...searchData,
    },
  });
};
