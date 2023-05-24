import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { HashRouter, Route, Routes } from 'react-router-dom';

import store from './store/configureStore';
import { MainPage } from './pages/main-page';
import { theme } from './styles/theme';

export default function App() {
  return (
    <Provider store={store}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <HashRouter>
          <Routes>
            <Route path='/' element={<MainPage token='12345' />} />
          </Routes>
        </HashRouter>
      </MantineProvider>
    </Provider>
  );
}
