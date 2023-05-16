import React, { FC } from 'react';

import Banner from '@components/Banner';
import ErrorBoundary from '@components/ErrorBoundary';
import Footer from '@components/Footer';
import Header from '@components/Header';
import StatusLine from '@components/StatusLine';

import { Wrapper } from './styles';
import { LayoutProps } from './types';

const Layout: FC<LayoutProps> = ({ children, toggleTheme, isDarkTheme }) => (
  <ErrorBoundary>
    <Wrapper>
      <Header toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
      <Banner />
      <StatusLine />
      {children}
      <Footer />
    </Wrapper>
  </ErrorBoundary>
);
export default Layout;
