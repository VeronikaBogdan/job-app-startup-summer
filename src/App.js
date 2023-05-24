import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { getAuth } from './store/reducers/auth';

import store from './store/configureStore';

import { Main } from './pages/main';
import { Vacancy } from './pages/vacancy/vacancy';
import { Favorites } from './pages/favorites';

import { theme } from './styles/theme';

const App = () => {
  const dispatch = useDispatch();
  const { authData } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAuth());
  }, [dispatch]);

  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<Main token={authData} />} />
            <Route path='/vacancy/:vacancyId' element={<Vacancy />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </HashRouter>
      </MantineProvider>
    </Provider>
  );
};

export default App;
