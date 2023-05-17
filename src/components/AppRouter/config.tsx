import { lazy } from 'react';

import { AppRoutes, IRoute } from './types';

const HomePage = lazy(() => import('@pages/HomePage'));
const BankcardPage = lazy(() => import('@pages/BankcardPage'));
const ContactPage = lazy(() => import('@pages/ContactPage'));
const TimelinePage = lazy(() => import('@pages/TimelinePage'));

export const publicAppRoutes: IRoute[] = [
  {
    path: AppRoutes.HOME,
    Element: HomePage,
  },
  {
    path: AppRoutes.TIMELINE,
    Element: TimelinePage,
  },
  {
    path: AppRoutes.BANKCARD,
    Element: BankcardPage,
  },
  {
    path: AppRoutes.CONTACT,
    Element: ContactPage,
  },
  {
    path: AppRoutes.NOT_FOUND,
    Element: HomePage,
  },
];
