import React, { FC, lazy, Suspense, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';

import AppRouter from '@components/AppRouter';
import Loader from '@components/Loader';
import { ThemeMode } from '@constants/styles/themes';
import { GlobalStyles } from '@styles/globalStyles';
import { darkTheme, lightTheme } from '@styles/theme';

const Layout = lazy(() => import('./components/Layout'));

const App: FC = () => {
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || ThemeMode.DARK
  );
  const isDarkTheme = theme === ThemeMode.DARK;
  const toggleTheme = () => {
    setTheme(isDarkTheme ? ThemeMode.LIGHT : ThemeMode.DARK);
  };
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Suspense fallback={<Loader />}>
        <Layout toggleTheme={toggleTheme} isDarkTheme={isDarkTheme}>
          <AppRouter />
        </Layout>
      </Suspense>
    </ThemeProvider>
  );
};

export default App;
