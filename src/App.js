import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import store from './store/configureStore';
import { MainPage } from './pages/main-page';
import { theme } from './styles/theme';
import { VacancyPage } from './pages/vacancy-page/vacancy-page';
import { FavoritesPage } from './pages/favorites-page';

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <HashRouter>
          <Routes>
            <Route
              path='/'
              element={
                <MainPage token='v3.r.137440105.fe7baafcc2d4de0346fbbe3092a1551b0762f381.3e541eed0d4cc5a82ba45c1d0a75623ca69d354b' />
              }
            />
            <Route path='/vacancy/:vacancyId' element={<VacancyPage />} />
            <Route path='/favorites' element={<FavoritesPage />} />
          </Routes>
        </HashRouter>
      </MantineProvider>
    </Provider>
  );
}
