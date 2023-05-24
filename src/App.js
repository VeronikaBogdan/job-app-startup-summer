import React, { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';

import { getAuth } from './store/reducers/auth';

import store from './store/configureStore';

import { MainPage } from './pages/main-page';
import { VacancyPage } from './pages/vacancy-page/vacancy-page';
import { FavoritesPage } from './pages/favorites-page';

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
            <Route path='/' element={<MainPage token={authData} />} />
            <Route path='/vacancy/:vacancyId' element={<VacancyPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </HashRouter>
      </MantineProvider>
    </Provider>
  );
};

export default App;
