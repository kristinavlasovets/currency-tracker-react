import BankcardPage from '@pages/BankcardPage';
import ContactPage from '@pages/ContactPage';
import HomePage from '@pages/HomePage';
import TimelinePage from '@pages/TimelinePage';

import { AppRoutes, IRoute } from './types';

export const publicAppRoutes: IRoute[] = [
  { path: AppRoutes.HOME, element: HomePage },
  { path: AppRoutes.TIMELINE, element: TimelinePage },
  { path: AppRoutes.BANKCARD, element: BankcardPage },
  { path: AppRoutes.CONTACT, element: ContactPage },
  { path: AppRoutes.NOT_FOUND, element: HomePage },
];
