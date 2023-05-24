import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { MantineProvider } from '@mantine/core';

import { getAuth } from '@/store/reducers/auth';

import store from '@/store/configureStore';

import { theme } from '@/styles/theme';

export const AppComponent = ({ Component, pageProps }) => {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth || 'please');

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <Component
        {...pageProps}
        token={authData}
        // token={'v3.r.137440105.3a9ab1f3113e98e829db884011a155639c4d8f5f.d7bee20ff24e252fe5fa5581d81633a2d3b77e47'}
      />
    </Provider>
  );
};
