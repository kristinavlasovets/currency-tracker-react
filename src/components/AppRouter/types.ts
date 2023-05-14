import { ComponentType } from 'react';

export interface IRoute {
  path: string;
  element: ComponentType;
}

export enum AppRoutes {
  HOME = '/',
  TIMELINE = '/timeline',
  BANKCARD = '/bankcard',
  CONTACT = '/contact',
  NOT_FOUND = '*',
}
